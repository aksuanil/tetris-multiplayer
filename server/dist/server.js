"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const types_1 = require("./types");
const utils_1 = require("./utils");
const storage_1 = require("./storage");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 8080;
const httpServer = http_1.default.createServer(app);
const io = new socket_io_1.Server(httpServer, {
    allowEIO3: true,
    cors: {
        origin: "*",
    }
});
app.use(require('express-status-monitor')({
    websocket: io,
}));
app.get('/', (req, res) => {
    res.send('Welcome to Tetrify.');
});
const onConnection = (socket) => {
    console.log(`${socket.id} connected!`);
    socket.on('joinRoom', (roomId, username = 'Guest', callback) => {
        var _a;
        socket.join(roomId);
        socket.roomId = roomId;
        const roomSize = (_a = io.sockets.adapter.rooms.get(roomId)) === null || _a === void 0 ? void 0 : _a.size;
        if (!roomSize)
            return;
        if (!storage_1.storage[roomId]) {
            storage_1.storage[roomId] = {
                id: roomId,
                seatOne: {
                    id: socket.id,
                    username,
                    status: types_1.SeatStatus.NOT_READY,
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
            };
            callback(socket.id, 0, storage_1.storage[roomId], types_1.PlayerStatus.NOT_READY);
        }
        else if (storage_1.storage[roomId].seatOne.status === types_1.SeatStatus.EMPTY) {
            storage_1.storage[roomId].seatOne.status = types_1.SeatStatus.NOT_READY;
            storage_1.storage[roomId].seatOne.id = socket.id;
            storage_1.storage[roomId].seatOne.username = username;
            callback(socket.id, 0, storage_1.storage[roomId], types_1.PlayerStatus.NOT_READY);
        }
        else if (storage_1.storage[roomId].seatTwo.status === types_1.SeatStatus.EMPTY) {
            storage_1.storage[roomId].seatTwo.status = types_1.SeatStatus.NOT_READY;
            storage_1.storage[roomId].seatTwo.id = socket.id;
            storage_1.storage[roomId].seatTwo.username = username;
            callback(socket.id, 1, storage_1.storage[roomId], types_1.PlayerStatus.NOT_READY);
        }
        else if (storage_1.storage[roomId].seatOne.status !== types_1.SeatStatus.EMPTY && storage_1.storage[roomId].seatTwo.status !== types_1.SeatStatus.EMPTY) {
            storage_1.storage[roomId].spectators.push(socket.id);
            callback(socket.id, 2, storage_1.storage[roomId], types_1.PlayerStatus.SPECTATOR);
        }
        io.to(roomId).emit('getRoomData', storage_1.storage[roomId]);
    });
    socket.on('getRoomData', (roomId, callback) => {
        callback(storage_1.storage[roomId]);
    });
    socket.on('gameOver', (data) => {
        if (data.score > 0)
            storage_1.highscores.push(data);
    });
    socket.on('getHighScores', (cb) => {
        return cb(storage_1.highscores.sort(({ score: a }, { score: b }) => b - a));
    });
    socket.on("message:to-server", (roomId, username, message) => io.to(roomId).emit('messageToClient', username, message));
    socket.on("socket:leaveRoom", (roomId) => (0, utils_1.leaveRoom)(socket, io, storage_1.storage, roomId));
    socket.on("disconnect", () => (0, utils_1.disconnect)(socket, io, storage_1.storage));
    socket.on('room-data', (type, data) => {
        switch (type) {
            case 'status':
                (0, utils_1.setStatus)(storage_1.storage[data.roomId], data.roomStatus);
                break;
            case 'seat-status':
                (0, utils_1.setSeatStatus)(storage_1.storage[data.roomId], data.seatId, data.seatStatus);
                break;
            case 'score':
                (0, utils_1.setScore)(storage_1.storage[data.roomId], data.seatId, data.info);
                break;
            case 'block-queue':
                (0, utils_1.setBlockQueue)(storage_1.storage[data.roomId], data.seatId, data.blockQueue);
                break;
            case 'board-matrix':
                (0, utils_1.setBoardMatrix)(storage_1.storage[data.roomId], data.roomId, data.seatId, data.boardMatrix, io);
                break;
            case 'game-over':
                (0, utils_1.setGameOver)(storage_1.storage[data.roomId], data.seatId);
                io.to(data.roomId).emit('game-over', data.seatId);
            default:
                break;
        }
        io.to(data.roomId).emit('getRoomData', storage_1.storage[data.roomId]);
    });
};
io.on("connection", onConnection);
httpServer.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
