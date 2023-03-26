import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BackArrow } from '../../assets/icons/Icons';
import { Context } from '../../store/context';
import { SoundManager } from '../../utils/SoundManager';
import styles from './Back.module.scss';

export default function Back() {
  const location = useLocation();
  const { setLeavePopup } = useContext(Context);

  useEffect(() => {
    window.addEventListener('beforeunload', () => sessionStorage.removeItem('infoPopup'));
  }, [location.key]);

  return (
    <React.Fragment>
      {location.pathname != '/' && (
        <div className={styles.back}>
          <button
            onClick={() => {
              setLeavePopup(true);
              SoundManager.getInstance().playSound('click');
            }}
          >
            <BackArrow color="#CE4242" width={36} height={36} />
            Back
          </button>
        </div>
      )}
    </React.Fragment>
  );
}
