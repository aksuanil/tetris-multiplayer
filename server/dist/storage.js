"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.highscores = exports.storage = void 0;
exports.storage = {
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
exports.highscores = [
    { id: '', username: 'TetrisKing', score: 1700 },
    { id: '', username: 'BestTetrisPlayer', score: 1400 },
    { id: '', username: 'TetrisManiac', score: 1100 },
    { id: '', username: 'TetrisTest', score: 800 },
];
