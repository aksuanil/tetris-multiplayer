import React, { forwardRef } from 'react';
import styles from './Input.module.scss';

type InputProps = {
  name: string;
  label?: string;
  inputType?: 'themeRed';
  error?: string;
  onChange?: (e: any) => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { inputType = 'themeRed', name, error, label, onChange } = props;
  Input.displayName = 'Input';

  return (
    <>
      <div className={styles.inputWrapper + ' ' + styles[inputType]}>
        {label && <label>{label}</label>}
        <input ref={ref} name={name} onChange={onChange} className={`${styles.nesInput} ${styles[inputType]}`} autoComplete="off" />
        {error && <div>{error}</div>}
      </div>
    </>
  );
});

export default Input;
