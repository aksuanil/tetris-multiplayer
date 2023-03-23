/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useRef, useState } from 'react';
import { gameSettings } from '../../../../../gameSettings';
import { Socket } from 'socket.io-client';
import { PlayerData, RoomData } from '../../../types';
import styles from './Board.module.scss';
import BlockQueue from '../../../../../Components/BlockQueue/BlockQueue';
import Scoreboard from '../../../../../Components/Scoreboard/Scoreboard';
import { MultiTetris } from '../../../../../utils/MultiTetris';
import GameOverPopup from '../../../../../Components/GameOverPopup/GameOverPopup';
import { PlayerStatus, SeatStatus } from '../../../enums';
import { SoundManager } from '../../../../../utils/SoundManager';

type Props = {
  socket: Socket;
  roomData: RoomData;
  playerData: PlayerData;
};

let board: MultiTetris | undefined;

export default function Board({ socket, roomData, playerData }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = gameSettings.canvasSize.width;
    canvas.height = gameSettings.canvasSize.height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    board = new MultiTetris(socket, roomData.id, playerData, ctx);
    board.startGame();
  };

  useEffect(() => {
    socket.on('game-over', (winnerSeatId: number) => {
      if (playerData.seatId === winnerSeatId) {
        SoundManager.getInstance().playSound('gameWin');
      } else {
        SoundManager.getInstance().playSound('gameLose');
      }
      board?.terminate();
    });
    initCanvas();
    return () => {
      board?.terminate();
    };
  }, []);

  const handleKeydown = (e: React.KeyboardEvent<HTMLCanvasElement> | { key: string }) => {
    if (!board || board.isGameOver) return;
    switch (e.key.toLowerCase()) {
      case 'arrowup':
      case 'w':
        board.rotateCurrentBlock();
        break;
      case 'arrowdown':
      case 's':
        board.moveCurrentBlock('DOWN');
        break;
      case 'arrowleft':
      case 'a':
        board.moveCurrentBlock('LEFT');
        break;
      case 'arrowright':
      case 'd':
        board.moveCurrentBlock('RIGHT');
        break;
      case ' ':
        board.dropBlock();
        break;
      default:
        break;
    }
  };

  return (
    <React.Fragment>
      {board?.isGameOver && (
        <GameOverPopup
          score={roomData[playerData.seatId === 0 ? 'seatOne' : 'seatTwo'].score}
          isWinner={roomData[playerData.seatId === 0 ? 'seatOne' : 'seatTwo'].status === SeatStatus.WON}
        />
      )}
      <BlockQueue
        position={playerData.seatId === 0 ? 'left' : 'right'}
        blockQueue={roomData[playerData.seatId === 0 ? 'seatOne' : 'seatTwo'].blockQueue}
      />
      <canvas className={styles.canvas} tabIndex={0} onKeyDown={(e) => handleKeydown(e)} id="canvas" ref={canvasRef} />
      <Scoreboard
        position={playerData.seatId === 0 ? 'left' : 'right'}
        score={roomData[playerData.seatId === 0 ? 'seatOne' : 'seatTwo'].score}
        lines={roomData[playerData.seatId === 0 ? 'seatOne' : 'seatTwo'].lines}
        username={roomData[playerData.seatId === 0 ? 'seatOne' : 'seatTwo'].username}
      />
    </React.Fragment>
  );
}
