import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BackArrow } from '../../assets/icons/Icons';
import styles from './Back.module.scss';

export default function Back() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = '';
    };
    window.addEventListener('beforeunload', () => sessionStorage.removeItem('infoPopup'));

    if (location.pathname != '/') {
      window.addEventListener('beforeunload', handleBeforeUnload);
    }
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [location.key]);

  return (
    <React.Fragment>
      {location.pathname != '/' && (
        <div className={styles.back}>
          <button onClick={() => navigate(-1)}>
            <BackArrow color="#CE4242" width={36} height={36} />
            Back
          </button>
        </div>
      )}
    </React.Fragment>
  );
}
