import React from 'react';
import { SoundManager } from '../../utils/SoundManager';
import styles from './Slider.module.scss';

type Props = {
  type: 'MASTER' | 'SFX' | 'MUSIC';
  defaultValue?: number;
};

export default function Slider({ type, defaultValue = 0.5 }: Props) {
  return (
    <input
      onChange={(e: any) => {
        type === 'MASTER' && SoundManager.getInstance().setMasterVolume(e.target.value);
        type === 'MUSIC' && SoundManager.getInstance().setMusicVolume(e.target.value);
        type === 'SFX' && SoundManager.getInstance().setSfxVolume(e.target.value);
        SoundManager.getInstance().playSound('slider');
      }}
      step={0.1}
      className={styles.slider}
      type="range"
      min="0"
      max="1"
      defaultValue={defaultValue}
    />
  );
}
