/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Container.module.scss';

const Container = React.forwardRef<HTMLFieldSetElement, React.HTMLAttributes<HTMLFieldSetElement>>(function (props, ref) {
  Container.displayName = 'Container';

  const color = `%23${props.color?.replace('#', '')}`;

  const borderStyles = {
    borderImageSource: `url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="${color}" /></svg>')`,
  };

  return (
    <fieldset
      {...props}
      className={styles.nesContainer + ' ' + styles.isRounded + ' ' + props.className + ' ' + styles.isCentered + ' ' + styles.withTitle}
      ref={ref}
      style={borderStyles}
    >
      {props.children}
    </fieldset>
  );
});

export default Container;
