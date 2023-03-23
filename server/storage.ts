import { Storage, Highscores } from "./types";

export const storage: Storage = {
    ["roomId"]: {
        id: '',
        seatOne: {
            id: '',
            username: '',
            status: 0,
            boardMatrix: [],
            score: 0,
            lines: 0,
            blockQueue: []
        },
        seatTwo: {
            id: '',
            username: '',
            status: 0,
            boardMatrix: [],
            score: 0,
            lines: 0,
            blockQueue: []
        },
        spectators: [],
        status: 0
    }
};

export const highscores: Highscores = [
    { id: '', username: 'TetrisKing', score: 1700 },
    { id: '', username: 'BestTetrisPlayer', score: 1400 },
    { id: '', username: 'TetrisManiac', score: 1100 },
    { id: '', username: 'TetrisTest', score: 800 },
]
