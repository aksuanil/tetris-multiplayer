import React, { useContext } from 'react';
import styles from './Layout.module.scss';
import Logo from './Components/Logo';
import Settings from './Components/Settings';
import Back from './Components/Back';
import { Context } from '../store/context';
import InfoPopup from '../Components/Popups/InfoPopup';
import LeavePopup from '../Components/Popups/LeavePopup';

type Props = {
  Component: () => JSX.Element;
};

export function Layout({ Component }: Props): JSX.Element {
  const { leavePopup, infoPopup } = useContext(Context);

  return (
    <div className={styles.app}>
      <div className={styles.pageBg}></div>
      <div className={styles.animationWrapper}>
        <div className={styles.particle + ' ' + styles.particle1}></div>
        <div className={styles.particle + ' ' + styles.particle2}></div>
        <div className={styles.particle + ' ' + styles.particle3}></div>
        <div className={styles.particle + ' ' + styles.particle4}></div>
      </div>
      <Logo />
      <Back />
      {infoPopup && <InfoPopup />}
      {leavePopup && <LeavePopup />}
      <Settings />
      <Component />
    </div>
  );
}
