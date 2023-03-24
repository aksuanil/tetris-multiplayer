/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';


type ContextType = {
    infoPopup: boolean,
    leavePopup: boolean,
    gameOver: boolean,
    setInfoPopup: (popup: boolean) => void;
    setLeavePopup: (popup: boolean) => void;
    gameOverPopup: (popup: boolean) => void;
};

export const Context = createContext<ContextType>({
    infoPopup: true,
    leavePopup: false,
    gameOver: false,
    setInfoPopup: () => { },
    setLeavePopup: () => { },
    gameOverPopup: () => { },
});

