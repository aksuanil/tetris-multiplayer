import React, { useContext, useState } from 'react';
import { Play } from '../../assets/icons/Icons';
import { Context } from '../../store/context';
import { SoundManager } from '../../utils/SoundManager';
import { Button } from '../Button';
import Container from '../Container/Container';
import styles from './InfoPopup.module.scss';

export default function InfoPopup() {
  const [hidden, setHidden] = useState(false);
  const { setInfoPopup } = useContext(Context);

  return (
    <div hidden={hidden} className={styles.popupContainer}>
      <Container className={styles.popup}>
        <div>
          <h1>Welcome to TetraCore</h1>
          <p>TetraCore is a multiplayer tetris game where you can battle or co-op with your friends.</p>
          <p>Keep in mind this is an alpha version and feel free to report feedbacks. </p>
          <p>Enjoy !</p>
        </div>
        <Button
          type="submit"
          buttonType="themeRed"
          onClick={() => {
            SoundManager.getInstance().playSound('theme');
            setInfoPopup(false);
            setHidden(true);
          }}
        >
          <Play width={64} height={64} color="#303030" />
        </Button>
      </Container>
    </div>
  );
}
