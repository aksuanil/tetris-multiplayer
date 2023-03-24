import React, { useState } from 'react';
import { Context } from './context';

type ProviderProps = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: ProviderProps) => {
  const [infoPopup, setInfoPopup] = useState(true);
  const [leavePopup, setLeavePopup] = useState(false);
  const [gameOver, gameOverPopup] = useState(false);

  const value = {
    infoPopup,
    leavePopup,
    gameOver,
    setInfoPopup,
    setLeavePopup,
    gameOverPopup,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
