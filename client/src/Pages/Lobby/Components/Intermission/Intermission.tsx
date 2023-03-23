import React, { useEffect, useState } from 'react';
import { SoundManager } from '../../../../utils/SoundManager';
import styles from './Intermission.module.scss';

type Props = {
  username1: string;
  username2: string;
};

export default function Intermission({ username1, username2 }: Props) {
  const [timer, setTimer] = useState(3);

  const startTimer = (timer: number) => {
    let intervalId = 0;
    let count = timer;
    intervalId = setInterval(() => {
      SoundManager.getInstance().playSound('hover');
      count--;
      if (count === 0) {
        clearInterval(intervalId);
      }
      setTimer(count);
    }, 1000);
  };

  useEffect(() => {
    startTimer(timer);
    SoundManager.getInstance().playSound('start');
  }, []);

  return (
    <div className={styles.intermission}>
      <span>{timer}</span>
      <div className={styles.name}>
        <span>{username1}</span>
        <span>VS</span>
        <span>{username2}</span>
      </div>
    </div>
  );
}
