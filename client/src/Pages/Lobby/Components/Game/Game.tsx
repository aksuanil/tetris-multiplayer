import React from 'react';
import { Socket } from 'socket.io-client';
import { PlayerData, RoomData } from '../../types';
import Board from '../Board/Board';
import DummyBoard from '../DummyBoard/DummyBoard';
import styles from './Game.module.scss';

type GameProps = {
  socket: Socket;
  roomData: RoomData;
  playerData: PlayerData;
};

export default function Game({ socket, roomData, playerData }: GameProps) {
  return (
    <div className={styles.game + ' ' + styles.gameMulti}>
      <React.Fragment>
        {playerData.seatId === 0 ? (
          <Board socket={socket} roomData={roomData} playerData={playerData} />
        ) : (
          <DummyBoard socket={socket} roomData={roomData} playerData={playerData} />
        )}
        {playerData.seatId === 1 ? (
          <Board socket={socket} roomData={roomData} playerData={playerData} />
        ) : (
          <DummyBoard socket={socket} roomData={roomData} playerData={playerData} />
        )}
      </React.Fragment>
    </div>
  );
}
