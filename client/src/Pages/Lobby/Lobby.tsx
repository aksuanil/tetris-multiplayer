import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as io from 'socket.io-client';
import { RoomData, PlayerData } from './types';
import { PlayerStatus, RoomStatus, SeatStatus } from './enums';
import { useLocation } from 'react-router-dom';
import { PowerGlitch } from 'powerglitch';
import { Room } from './Components/Room';
import { Intermission } from './Components/Intermission';
import { Game } from './Components/Game';
import styles from './Lobby.module.scss';

type Props = {
  socket: io.Socket;
};

export default function Lobby({ socket }: Props): JSX.Element {
  const { roomId } = useParams();
  // return 404 page
  if (!roomId) return <div></div>;

  const location = useLocation();
  const [playerData, setPlayerData] = useState<PlayerData>({
    id: '',
    seatId: 1,
    username: location.state?.username,
    status: PlayerStatus.SPECTATOR,
  });

  const [roomData, setRoomData] = useState<RoomData>({
    id: '',
    seatOne: {
      id: '',
      username: '',
      status: 0,
      score: 0,
      lines: 0,
      blockQueue: [],
    },
    seatTwo: {
      id: '',
      username: '',
      status: 0,
      score: 0,
      lines: 0,
      blockQueue: [],
    },
    spectators: [],
    status: RoomStatus.WAITING,
  });
  useEffect(() => {
    if (playerData.username) {
      socket.emit('joinRoom', roomId, playerData.username, (id: string, seatId: 0 | 1, roomData: RoomData, playerStatus: PlayerStatus) => {
        setPlayerData({ ...playerData, id, seatId, status: playerStatus });
        setRoomData(roomData);
      });
    }
  }, [playerData.username]);

  useEffect(() => {
    socket.emit('getRoomData', roomId, setRoomData);
    socket.on('getRoomData', (data) => setRoomData(data));
    return () => {
      socket.emit('leaveRoom', roomId);
    };
  }, []);

  useEffect(() => {
    document.querySelectorAll('.glitch').length > 0 &&
      PowerGlitch.glitch(document.querySelectorAll('.glitch'), {
        playMode: 'always',
        createContainers: false,
        hideOverflow: false,
        timing: {
          duration: 10000,
        },
        glitchTimeSpan: {
          start: 0,
          end: 0.05,
        },
        shake: {
          velocity: 25,
          amplitudeX: 0.1,
          amplitudeY: 0.1,
        },
        slice: {
          count: 6,
          velocity: 25,
          minHeight: 0.02,
          maxHeight: 0.15,
          hueRotate: true,
        },
        pulse: false,
      });
  }, [document.querySelectorAll('.glitch').length]);
  return (
    <React.Fragment>
      <div className={styles.lobbyWrapper}>
        {(roomData.status === RoomStatus.WAITING || roomData.status === RoomStatus.READY) && (
          <Room socket={socket} roomData={roomData} playerData={playerData} setPlayerData={setPlayerData} />
        )}
        {roomData.status === RoomStatus.INTERMISSION && (
          <Intermission username1={roomData.seatOne.username} username2={roomData.seatTwo.username} />
        )}
        {(roomData.status === RoomStatus.PLAYING || roomData.status === RoomStatus.FINISHED) && (
          <Game socket={socket} roomData={roomData} playerData={playerData} />
        )}
      </div>
    </React.Fragment>
  );
}
