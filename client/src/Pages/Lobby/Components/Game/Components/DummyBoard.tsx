/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useRef } from 'react';
import { gameSettings } from '../../../../../gameSettings';
import { Socket } from 'socket.io-client';
import { PlayerData, RoomData } from '../../../types';
import styles from './DummyBoard.module.scss';
import BlockQueue from '../../../../../Components/BlockQueue/BlockQueue';
import Scoreboard from '../../../../../Components/Scoreboard/Scoreboard';
import { GameRenderer } from '../../../../../utils/GameRenderer';

type Props = {
  socket: Socket;
  roomData: RoomData;
  playerData: PlayerData;
};

export default function DummyBoard({ socket, roomData, playerData }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = gameSettings.canvasSize.width;
      canvasRef.current.height = gameSettings.canvasSize.height;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const render = new GameRenderer(ctx);

      socket.on('getBoardMatrix', (seatId: number, boardMatrix: []) => {
        if (playerData.seatId === seatId) {
          // board.matrix = boardMatrix
        } else {
          render.renderBoard(boardMatrix);
        }
      });
    }
  }, [canvasRef.current]);

  return (
    <React.Fragment>
      <BlockQueue
        position={playerData.seatId === 0 ? 'right' : 'left'}
        type="dummy"
        blockQueue={roomData[playerData.seatId === 0 ? 'seatTwo' : 'seatOne'].blockQueue}
      />
      <canvas id="canvas" ref={canvasRef} className={styles.canvas} />
      <Scoreboard
        position={playerData.seatId === 0 ? 'right' : 'left'}
        type="dummy"
        score={roomData[playerData.seatId === 0 ? 'seatTwo' : 'seatOne'].score}
        lines={roomData[playerData.seatId === 0 ? 'seatTwo' : 'seatOne'].lines}
        username={roomData[playerData.seatId === 0 ? 'seatTwo' : 'seatOne'].username}
      />
    </React.Fragment>
  );
}
