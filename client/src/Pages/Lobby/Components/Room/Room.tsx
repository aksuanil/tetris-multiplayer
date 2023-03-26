import React, { useState, useEffect } from 'react';
import { Socket } from 'socket.io-client';
import { Check, Copy, Uncheck } from '../../../../assets/icons/Icons';
import Button from '../../../../Components/Button/Button';
import HotJoinPopup from '../../../../Components/Popups/HotJoinPopup';
import { PlayerStatus, SeatStatus } from '../../enums';
import { Messages, PlayerData, RoomData } from '../../types';
import styles from './Room.module.scss';
import { SoundManager } from '../../../../utils/SoundManager';
import Chat from '../Chat/Chat';
import Spectators from '../Spectators/Spectators';

type RoomProps = {
  socket: Socket;
  roomData: RoomData;
  playerData: PlayerData;
  setPlayerData: any;
};

export default function Room({ socket, roomData, playerData, setPlayerData }: RoomProps) {
  const [messages, setMessages] = useState<Messages>([]);
  const [copyPopover, setCopyPopover] = useState(false);

  useEffect(() => {
    socket.on('messageToClient', (username: string, message: string) => {
      setMessages((curr) => [...curr, { username, message }]);
      SoundManager.getInstance().playSound('message');
    });
  }, []);

  const emitMessage = (message: string) => {
    if (message === '') return;
    socket.emit('message:to-server', roomData.id, playerData.username, message);
    SoundManager.getInstance().playSound('message');
  };

  const setIntermission = () => {
    socket.emit('room-data', 'status', { roomId: roomData.id, roomStatus: 2 });
    setTimeout(() => {
      socket.emit('room-data', 'status', { roomId: roomData.id, roomStatus: 3 });
    }, 3000);
  };

  const copyToClipboard = (text: string) => {
    SoundManager.getInstance().playSound('click');
    navigator.clipboard.writeText(text);
    if (copyPopover) return;
    setCopyPopover(true);
    setTimeout(() => {
      setCopyPopover(false);
    }, 2000);
  };

  return (
    <div className={styles.lobby}>
      {!playerData.username && (
        <HotJoinPopup
          nameCallback={(name: string) =>
            setPlayerData({
              ...playerData,
              username: name,
            })
          }
        />
      )}
      <div className={styles.lobbyTop}>
        <div className={styles.readyButtonWrapper}>
          {roomData.seatOne.status !== SeatStatus.EMPTY ? (
            <div>
              <div className={styles.check}>
                {roomData.seatOne.status === SeatStatus.READY ? (
                  <Check color="#41CB2B" height={40} width={40} />
                ) : (
                  <Uncheck color="#DF2828" height={40} width={40} />
                )}
                <span>{roomData.seatOne.username}</span>
              </div>
              <Button
                buttonType={roomData.seatOne.status === SeatStatus.READY ? 'themeGreen' : 'themeRed'}
                disabled={roomData.seatOne.id !== playerData.id}
                type="button"
                onClick={() => {
                  socket.emit('room-data', 'seat-status', {
                    roomId: roomData.id,
                    seatId: playerData.seatId,
                    seatStatus: roomData.seatOne.status === 2 ? 1 : 2,
                  });
                  setPlayerData({
                    ...playerData,
                    status: playerData.status !== PlayerStatus.NOT_READY ? PlayerStatus.NOT_READY : PlayerStatus.READY,
                  });
                }}
              >
                Ready
              </Button>
            </div>
          ) : (
            <div className={styles.loaderWrap}>
              <div>Waiting player...</div>
              <span className={styles.loader} />
            </div>
          )}
          {roomData.seatTwo.status !== SeatStatus.EMPTY ? (
            <div>
              <div className={styles.check}>
                {roomData.seatTwo.status === SeatStatus.READY ? (
                  <Check color="#41CB2B" height={40} width={40} />
                ) : (
                  <Uncheck color="#DF2828" height={40} width={40} />
                )}
                <span>{roomData.seatTwo.username}</span>
              </div>
              <Button
                buttonType={roomData.seatTwo.status === SeatStatus.READY ? 'themeGreen' : 'themeRed'}
                disabled={roomData.seatTwo.id !== playerData.id}
                type="button"
                onClick={() => {
                  socket.emit('room-data', 'seat-status', {
                    roomId: roomData.id,
                    seatId: playerData.seatId,
                    seatStatus: roomData.seatTwo.status === 2 ? 1 : 2,
                  });
                  setPlayerData({
                    ...playerData,
                    status: playerData.status !== PlayerStatus.NOT_READY ? PlayerStatus.NOT_READY : PlayerStatus.READY,
                  });
                }}
              >
                Ready
              </Button>
            </div>
          ) : (
            <div className={styles.loaderWrap}>
              <div>Waiting player...</div>
              <div className={styles.loader} />
            </div>
          )}
        </div>
        <Button
          buttonType={
            roomData.seatOne.status === SeatStatus.READY && roomData.seatTwo.status === SeatStatus.READY ? 'themeGreen' : 'themeRed'
          }
          disabled={
            roomData.seatOne.status !== SeatStatus.READY ||
            roomData.seatTwo.status !== SeatStatus.READY ||
            roomData.seatOne.id !== playerData.id
          }
          type="button"
          onClick={() => {
            setIntermission();
          }}
        >
          Start
        </Button>
      </div>
      <div className={styles.lobbyBottom}>
        <span className={styles.roomId}>
          Room ID: {roomData.id}
          <div onClick={() => copyToClipboard(roomData.id)}>
            {copyPopover && <div className={styles.copyText}>Copied to clipboard!</div>}
            <Copy height={32} width={32} color="#ce4242" />
          </div>
        </span>
        <div>
          <Chat messages={messages} emitMessage={emitMessage} />
          <Spectators roomData={roomData} />
        </div>
      </div>
    </div>
  );
}
