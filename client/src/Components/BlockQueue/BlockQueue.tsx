import React, { useEffect, useRef } from 'react';
import styles from './BlockQueue.module.scss';
import { gameSettings } from '../../gameSettings';
import { GameRenderer } from '../../utils/GameRenderer';
import { Block } from '../../types';

type Props = {
  blockQueue: Block[];
  position: 'center' | 'left' | 'right';
  type?: 'solo' | 'dummy' | 'player';
};

const BLOCK_SIZE = gameSettings.blockSize.x();

export default function BlockQueue({ blockQueue, position, type }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const renderBoard = (canvasContext: CanvasRenderingContext2D) => {
    canvasContext.clearRect(0, 0, 250, 350);
    blockQueue.slice(1).forEach((block, index) => {
      for (let x = 0; x < block.matrix.length; x++) {
        for (let y = 0; y < block.matrix[x].length; y++) {
          if (block.matrix[x][y] > 0) {
            canvasContext.fillStyle = GameRenderer.colorsPattern[block.matrix[x][y]];
            canvasContext.fillRect(y * BLOCK_SIZE + 40, x * BLOCK_SIZE + index * 120, BLOCK_SIZE, BLOCK_SIZE);
          }
        }
      }
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    renderBoard(ctx);
  }, [JSON.stringify(blockQueue)]);

  return (
    <div className={styles.queue + ' ' + styles[position] + ' ' + styles[type!]}>
      <div className={styles.title}>Next Block</div>
      <canvas className={styles.canvas} width={200} height={350} ref={canvasRef} />
    </div>
  );
}
