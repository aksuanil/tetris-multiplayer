import React, { useState } from 'react';
import { Gear, SoundGear } from '../../assets/icons/Icons';
import Container from '../../Components/Container/Container';
import Slider from '../../Components/Slider/Slider';
import { SoundManager } from '../../utils/SoundManager';
import styles from './Settings.module.scss';

export default function Settings() {
  const [menu, setMenu] = useState(false);

  return (
    <React.Fragment>
      <div
        onClick={() => {
          SoundManager.getInstance().playSound('click');
          setMenu((curr) => !curr);
        }}
        className={styles.icon}
      >
        <SoundGear color="#CE4242" width={40} height={40} />
      </div>
      {menu && (
        <Container color="#CE4242" className={styles.menu}>
          <legend>Settings</legend>
          <div>
            <label>Master Volume</label>
            <Slider type="MASTER" defaultValue={SoundManager.getMasterVolume()} />
          </div>
          <div>
            <label>SFX Volume</label>
            <Slider type="SFX" defaultValue={SoundManager.getSfxVolume()} />
          </div>
          <div>
            <label>Music Volume</label>
            <Slider type="MUSIC" defaultValue={SoundManager.getMusicVolume()} />
          </div>
        </Container>
      )}
    </React.Fragment>
  );
}
