/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef } from 'react';
import styles from './Logo.module.scss';
import { LogoIcon } from '../../assets/icons/Icons';

export default function Logo(): JSX.Element {
  const logoRef = useRef<HTMLDivElement>(null);

  const logoAnimation = () => {
    const colors = ['#BA00DD', '#FFB700', '#00B4C4', '#FF008F'];
    const svg = logoRef.current!.querySelector('svg');

    let index = 0;
    setInterval(() => {
      svg!.style.filter = `drop-shadow(5px 0px 30px ${colors[index]})`;
      index = (index + 1) % colors.length;
    }, 3000);
  };

  useEffect(() => {
    logoAnimation();
  }, []);

  return (
    <div ref={logoRef} className={styles.logo}>
      <LogoIcon width={66} height={66}></LogoIcon>
      <span>
        <div className={styles.line}>
          <span style={{ color: '#66CC66' }}>T</span>
          <span style={{ color: '#FF9966' }}>E</span>
          <span style={{ color: '#00B4C4' }}>T</span>
          <span style={{ color: '#FF0066' }}>R</span>
          <span style={{ color: '#BA00DD' }}>A</span>
        </div>
        <div className={styles.line}>
          <span style={{ color: '#00B4C4' }}>C</span>
          <span style={{ color: '#FF0066' }}>O</span>
          <span style={{ color: '#66CC66' }}>R</span>
          <span style={{ color: '#FF9966' }}>E</span>
        </div>
      </span>
    </div>
  );
}
