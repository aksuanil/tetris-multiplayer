import { PowerGlitch } from 'powerglitch';
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

  const element = document.querySelector('.glitch');

  useEffect(() => {
    element &&
      PowerGlitch.glitch('.glitch', {
        glitchTimeSpan: {
          start: 0.5,
          end: 0.85,
        },
        shake: {
          velocity: 25,
          amplitudeX: 0.20,
          amplitudeY: 0.10,
        },
      });
  }, [element]);

  return (
    <div className={styles.intermission}>
      <span>{timer}</span>
      <div className={styles.name + ' ' + 'glitch'}>
        <div>{username1}</div>
        <span>VS</span>
        <div>{username2}</div>
      </div>
    </div>
  );
}
