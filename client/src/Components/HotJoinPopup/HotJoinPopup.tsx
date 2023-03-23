import React, { useEffect, useRef, useState } from 'react';
import { SoundManager } from '../../utils/SoundManager';
import { Button } from '../Button';
import Container from '../Container/Container';
import { Input } from '../Input';
import styles from './HotJoinPopup.module.scss';

type Props = {
  nameCallback: any;
};

export default function HotJoinPopup({ nameCallback }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (e.target[0].value) {
      nameCallback(e.target[0].value);
      SoundManager.getInstance().playSound('theme');
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={styles.popupContainer}>
      <Container className={styles.popup}>
        <form onSubmit={handleSubmit}>
          Username:
          <Input name="username-popup-input" inputType="themeRed" ref={inputRef} />
          {error && <span>Username is Required</span>}
          <Button type="submit" buttonType="themeRed">
            Join
          </Button>
        </form>
      </Container>
    </div>
  );
}
