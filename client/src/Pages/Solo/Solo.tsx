import React, { useEffect, useReducer, useRef, useState } from 'react';
import Scoreboard from '../../Components/Scoreboard/Scoreboard';
import { gameSettings } from '../../gameSettings';
import BlockQueue from '../../Components/BlockQueue/BlockQueue';
import styles from './Solo.module.scss';
import { Socket } from 'socket.io-client';
import { useLocation } from 'react-router-dom';
import HotJoinPopup from '../../Components/HotJoinPopup/HotJoinPopup';
import GameOverPopup from '../../Components/GameOverPopup/GameOverPopup';
import { SoloTetris } from '../../utils/SoloTetris';

type Props = {
  socket: Socket;
};

let board: SoloTetris | undefined;

export default function Solo({ socket }: Props): JSX.Element {
  // const [gameBoard, setBoard] = useState<SoloGameBoard>();
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const location = useLocation();
  const [username, setUsername] = useState(location.state?.username);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.focus();

    canvas.width = gameSettings.canvasSize.width;
    canvas.height = gameSettings.canvasSize.height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    board = new SoloTetris(ctx, forceUpdate, socket, username);
    board.startGame();
    forceUpdate();
  };

  const resetGame = () => {
    board?.terminate();
    initCanvas();
  };

  useEffect(() => {
    if (username) {
      initCanvas();
    }
    return () => {
      board?.terminate();
    };
  }, [username]);

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
    <div className={styles.soloGame}>
      {!username && <HotJoinPopup nameCallback={setUsername} />}
      {board && (
        <React.Fragment>
          {board.isGameOver && <GameOverPopup score={board.score} resetGame={resetGame} />}
          <Scoreboard position="center" score={board.score} lines={board.lines} username={username} />
          <BlockQueue position="center" blockQueue={board.blockQueue} />
        </React.Fragment>
      )}
      <canvas hidden={!username} className={styles.canvas} tabIndex={0} onKeyDown={(e) => handleKeydown(e)} id="canvas" ref={canvasRef} />
    </div>
  );
}
