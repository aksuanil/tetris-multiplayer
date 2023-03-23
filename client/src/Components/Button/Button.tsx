import React, { ReactElement } from 'react';
import styles from './Button.module.scss';
import { SoundManager } from '../../utils/SoundManager';

type ButtonProps = {
  type: 'submit' | 'reset' | 'button';
  buttonType?: 'themeRed' | 'themeGreen';
  disabled?: boolean;
  children?: string | ReactElement;
  error?: string;
  onClick?: (e?: any) => void;
};

export default function Button(props: ButtonProps) {
  const { type, buttonType = 'themeRed', children, error, disabled, onClick } = props;

  return (
    <React.Fragment>
      <button
        disabled={disabled}
        type={type}
        onMouseDown={() => SoundManager.getInstance().playSound('click')}
        onClick={onClick}
        className={`${styles.nesBtn} ${styles[buttonType]} ${disabled && styles.isDisabled}`}
      >
        {children}
      </button>
      {error && <div>{error}</div>}
    </React.Fragment>
  );
}
