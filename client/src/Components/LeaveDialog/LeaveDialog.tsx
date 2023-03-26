import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Close } from '../../assets/icons/Icons';
import { Context } from '../../store/context';
import { Button } from '../Button';
import Container from '../Container/Container';
import styles from '../HotJoinPopup/HotJoinPopup.module.scss';

export default function LeaveDialog() {
  const navigate = useNavigate();
  const { setLeavePopup } = useContext(Context);

  return (
    <div className={styles.popupContainer}>
      <Container className={styles.popup}>
        <div className={styles.leavePopup}>
          <div onClick={() => setLeavePopup(false)} className={styles.closeButton}>
            <Close color="#ffffff" width={60} height={30} />
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
