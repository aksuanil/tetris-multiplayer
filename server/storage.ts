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
    { id: '', username: 'Test_User', score: 1700 },
    { id: '', username: 'Test_User_2', score: 1400 },
    { id: '', username: 'Test_User_3', score: 1100 },
]
