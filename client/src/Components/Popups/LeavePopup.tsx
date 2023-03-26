import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Close } from '../../assets/icons/Icons';
import { Context } from '../../store/context';
import { SoundManager } from '../../utils/SoundManager';
import { Button } from '../Button';
import Container from '../Container/Container';
import styles from './HotJoinPopup.module.scss';

export default function LeavePopup() {
  const navigate = useNavigate();
  const { setLeavePopup } = useContext(Context);

  return (
    <div className={styles.popupContainer}>
      <Container className={styles.popup}>
        <div className={styles.leavePopup}>
          <div
            onClick={() => {
              setLeavePopup(false);
              SoundManager.getInstance().playSound('click');
            }}
            className={styles.closeButton}
          >
            <Close color="#CE4242" width={32} height={32} />
          </div>
          <p>You are about to leave the lobby</p>
          <p>Are you sure?</p>
          <Button
            onClick={() => {
              navigate('/');
              setLeavePopup(false);
            }}
            type="button"
            buttonType="themeRed"
          >
            Leave
          </Button>
        </div>
      </Container>
    </div>
  );
}
