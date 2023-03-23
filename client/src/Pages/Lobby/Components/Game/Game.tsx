import React, { useState } from 'react';
import { Socket } from 'socket.io-client';
import Board from './Components/Board';
import { PlayerData, RoomData } from '../../types';
import DummyBoard from './Components/DummyBoard';
import styles from './Game.module.scss';
import GameOverPopup from '../../../../Components/GameOverPopup/GameOverPopup';

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
