import express from 'express';
import dotenv from 'dotenv';
import { Server, Socket } from 'socket.io'
import http from 'http';
import { SeatStatus, PlayerStatus } from './types';
import { setBlockQueue, setSeatStatus, setScore, setStatus, setBoardMatrix, disconnect, leaveRoom, setGameOver } from './utils';
import { highscores, storage } from './storage';

dotenv.config();
const app = express();
const PORT = 8080;
const httpServer = http.createServer(app);

const io = new Server(httpServer, {
    allowEIO3: true,
    cors: {
        origin: "*",
    }
});

app.use(require('express-status-monitor')({
    websocket: io,
}));

app.get('/', (req, res) => {
    res.send('Welcome to Tetrify.')
})

declare module 'socket.io' {
    interface Socket {
        username: string;
        roomId: string;
    }
}

const onConnection = (socket: Socket) => {
    console.log(`${socket.id} connected!`);
    socket.on('joinRoom', (roomId: string, username: string = 'Guest', callback: Function) => {
        socket.join(roomId);
        socket.roomId = roomId
        const roomSize = io.sockets.adapter.rooms.get(roomId)?.size
        if (!roomSize) return;

        if (!storage[roomId]) {
            storage[roomId] = {
                id: roomId,
                seatOne: {
                    id: socket.id,
                    username,
                    status: SeatStatus.NOT_READY,
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
            callback(socket.id, 0, storage[roomId], PlayerStatus.NOT_READY);
        }
        else if (storage[roomId].seatOne.status === SeatStatus.EMPTY) {
            storage[roomId].seatOne.status = SeatStatus.NOT_READY;
            storage[roomId].seatOne.id = socket.id;
            storage[roomId].seatOne.username = username;
            callback(socket.id, 0, storage[roomId], PlayerStatus.NOT_READY);
        }
        else if (storage[roomId].seatTwo.status === SeatStatus.EMPTY) {
            storage[roomId].seatTwo.status = SeatStatus.NOT_READY;
            storage[roomId].seatTwo.id = socket.id;
            storage[roomId].seatTwo.username = username;
            callback(socket.id, 1, storage[roomId], PlayerStatus.NOT_READY);
        }
        else if (storage[roomId].seatOne.status !== SeatStatus.EMPTY && storage[roomId].seatTwo.status !== SeatStatus.EMPTY) {
            storage[roomId].spectators.push(socket.id);
            callback(socket.id, 2, storage[roomId], PlayerStatus.SPECTATOR);
        }

        io.to(roomId).emit('getRoomData', storage[roomId]);
    })

    socket.on('getRoomData', (roomId: string, callback) => {
        callback(storage[roomId])
    })

    socket.on('gameOver', (data) => {
        if (data.score > 0)
            highscores.push(data)
    })

    socket.on('getHighScores', (cb: Function) => {
        return cb(highscores.sort(({ score: a }, { score: b }) => b - a))
    }
    )

    socket.on("message:to-server", (roomId, username, message) => io.to(roomId).emit('messageToClient', username, message));

    socket.on("socket:leaveRoom", ({ roomId }) => leaveRoom(socket, io, storage, roomId));

    socket.on("disconnect", () => disconnect(socket, io, storage));

    socket.on('room-data', (type, data) => {
        switch (type) {
            case 'status':
                setStatus(storage[data.roomId], data.roomStatus)
                break;
            case 'seat-status':
                setSeatStatus(storage[data.roomId], data.seatId, data.seatStatus)
                break;
            case 'score':
                setScore(storage[data.roomId], data.seatId, data.info)
                break;
            case 'block-queue':
                setBlockQueue(storage[data.roomId], data.seatId, data.blockQueue)
                break;
            case 'board-matrix':
                setBoardMatrix(storage[data.roomId], data.roomId, data.seatId, data.boardMatrix, io)
                break;
            case 'game-over':
                setGameOver(storage[data.roomId], data.seatId)
                io.to(data.roomId).emit('game-over', data.seatId)
            default:
                break;
        }
        io.to(data.roomId).emit('getRoomData', storage[data.roomId]);
    })
}

io.on("connection", onConnection);

httpServer.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});