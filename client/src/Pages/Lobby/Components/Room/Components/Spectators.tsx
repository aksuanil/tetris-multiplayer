import React, { useEffect, useRef } from 'react';
import Container from '../../../../../Components/Container/Container';
import { SoundManager } from '../../../../../utils/SoundManager';
import { RoomData } from '../../../types';
import styles from './Spectators.module.scss';

type Props = {
  roomData: RoomData;
};

export default function Spectators({ roomData }: Props) {
  const users = [roomData.seatOne.username, roomData.seatTwo.username, ...roomData.spectators].filter((item) => !!item);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!users.length) return;
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      users.length > 0 && SoundManager.getInstance().playSound('join');
    }
  }, [users.length]);

  return (
    <Container color="#ce4242" className={styles.spectators}>
      <legend>Players</legend>
      {users.map((item, index) => (
        <div key={index} className={styles.row}>
          {item}
        </div>
      ))}
    </Container>
  );
}
