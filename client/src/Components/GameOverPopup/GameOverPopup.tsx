import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BackArrow, Repeat } from '../../assets/icons/Icons';
import { Button } from '../Button';
import Container from '../Container/Container';
import styles from './GameOverPopup.module.scss';

type Props = {
  score: number;
  isWinner?: boolean;
  resetGame?: () => void;
};

export default function GameOverPopup({ score, resetGame, isWinner }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.popupContainer}>
      <Container color="#CE4242" className={styles.popup}>
        <div className={styles.popupTop}>
          <h1>Game Over</h1>
          {isWinner === true && <p className={styles.won}>You have won !</p>}
          {isWinner === false && <p className={styles.lost}>You have lost !</p>}
          <p>Your score is </p>
          <span>{score}</span>
        </div>
        <div className={styles.btnGroup}>
          <Button type="button" buttonType="themeRed" onClick={() => navigate('/')}>
            <div className={styles.btnElem}>
              <BackArrow color="#303030" width={36} height={36} />
              <span>Return to {location.pathname.includes('lobby') ? 'Lobby' : 'Menu'}</span>
            </div>
          </Button>
          {location.pathname.includes('solo') && (
            <Button type="button" buttonType="themeRed" onClick={resetGame}>
              <div className={styles.btnElem}>
                <Repeat color="#303030" width={32} height={32} />
                <span>Play Again</span>
              </div>
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
}
