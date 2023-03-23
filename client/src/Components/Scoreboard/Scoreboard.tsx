import React from 'react';
import styles from './Scoreboard.module.scss';

type Props = {
  score: number;
  lines: number;
  username: string;
  position: 'center' | 'left' | 'right';
  type?: 'solo' | 'dummy' | 'player';
};

export default function Scoreboard({ score, lines, username, type, position }: Props) {
  return (
    <div className={styles.info + ' ' + styles[position] + ' ' + styles[type!]}>
      <div className={styles.infoItem + ' ' + styles.name}>{username}</div>
      <div className={styles.infoItem}>
        <div className={styles.title}>Score</div>
        <div className={styles.score}>{score}</div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.title}>Lines</div>
        <div className={styles.score}>{lines}</div>
      </div>
    </div>
  );
}
