import React from 'react';
import styles from './main.module.scss';
import classes2 from './Layout.module.scss';
import Logo from './Components/Logo';
import Settings from './Components/Settings';
import Back from './Components/Back';

type Props = {
  Component: () => JSX.Element;
};

export function Layout({ Component }: Props): JSX.Element {
  return (
    <div className={styles.app}>
      <div className={classes2.pageBg}></div>
      <div className={classes2.animationWrapper}>
        <div className={classes2.particle + ' ' + classes2.particle1}></div>
        <div className={classes2.particle + ' ' + classes2.particle2}></div>
        <div className={classes2.particle + ' ' + classes2.particle3}></div>
        <div className={classes2.particle + ' ' + classes2.particle4}></div>
      </div>
      <Logo />
      <Back />
      <Settings />
      <Component />
    </div>
  );
}
