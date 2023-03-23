"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leaveRoom = exports.disconnect = exports.setBoardMatrix = exports.leaveOrDisconnect = exports.setBlockQueue = exports.setScore = exports.setGameOver = exports.setStatus = exports.setSeatStatus = void 0;
const types_1 = require("./types");
const setSeatStatus = (roomData, seatId, seatStatus) => {
    try {
        switch (seatId) {
            case 0:
                if (seatStatus === types_1.SeatStatus.EMPTY)
                    roomData.seatOne.id = '';
                if (seatStatus === types_1.SeatStatus.WON)
                    roomData.seatOne.status = types_1.SeatStatus.LOST;
                roomData.seatOne.status = seatStatus;
                break;
            case 1:
                if (seatStatus === types_1.SeatStatus.EMPTY)
                    roomData.seatTwo.id = '';
                if (seatStatus === types_1.SeatStatus.WON)
                    roomData.seatTwo.status = types_1.SeatStatus.LOST;
                roomData.seatTwo.status = seatStatus;
                break;
            default:
                break;
        }
    }
    catch (error) {
        console.log(error);
    }
};
exports.setSeatStatus = setSeatStatus;
const setStatus = (roomData, status) => {
    try {
        roomData.status = status;
    }
    catch (error) {
        console.log(error);
    }
};
exports.setStatus = setStatus;
const setGameOver = (roomData, seatId) => {
    try {
        switch (seatId) {
            case 0:
                roomData.seatOne.status = types_1.SeatStatus.WON;
                roomData.seatTwo.status = types_1.SeatStatus.LOST;
                break;
            case 1:
                roomData.seatOne.status = types_1.SeatStatus.LOST;
                roomData.seatTwo.status = types_1.SeatStatus.WON;
                break;
            default:
                break;
        }
        roomData.status = types_1.RoomStatus.FINISHED;
    }
    catch (error) {
        console.log(error);
    }
};
exports.setGameOver = setGameOver;
const setScore = (roomData, seatId, info) => {
    try {
        switch (seatId) {
            case 0:
                roomData.seatOne.score = info.score;
                roomData.seatOne.lines = info.lines;
                roomData.seatOne.blockQueue = info.blockQueue;
                break;
            case 1:
                roomData.seatTwo.score = info.score;
                roomData.seatTwo.lines = info.lines;
                roomData.seatTwo.blockQueue = info.blockQueue;
                break;
            default:
                break;
        }
        if (info.score > 7000) {
            (0, exports.setGameOver)(roomData, seatId);
        }
    }
    catch (error) {
        console.log(error);
    }
};
exports.setScore = setScore;
const setBlockQueue = (roomData, seatId, blockQueue) => {
    try {
        switch (seatId) {
            case 0:
                roomData.seatOne.blockQueue = blockQueue;
                break;
            case 1:
                roomData.seatTwo.blockQueue = blockQueue;
                break;
            default:
                break;
        }
    }
    catch (error) {
        console.log(error);
    }
};
exports.setBlockQueue = setBlockQueue;
const leaveOrDisconnect = (data, roomId, isPopulated, currentId) => {
    try {
        if (!data[roomId])
            return;
        const { id, seatOne, seatTwo, spectators } = data[roomId];
        if (!isPopulated) {
            delete data[id];
            console.log(`Room ${id} deleted`);
            return;
        }
        if (seatOne.id === currentId) {
            seatOne.id = '';
            seatOne.username = '';
            seatOne.status = 0;
        }
        if (seatTwo.id === currentId) {
            seatTwo.id = '';
            seatTwo.username = '';
            seatTwo.status = 0;
        }
        data[roomId].spectators = spectators.filter((item) => item !== currentId);
    }
    catch (error) {
        console.log(error);
    }
};
exports.leaveOrDisconnect = leaveOrDisconnect;
const setBoardMatrix = (roomData, roomId, seatId, boardMatrix, io) => {
    try {
        switch (seatId) {
            case 0:
                roomData.seatOne.boardMatrix = boardMatrix;
                break;
            case 1:
                roomData.seatTwo.boardMatrix = boardMatrix;
                break;
        }
        io.to(roomId).emit('getBoardMatrix', seatId, boardMatrix);
    }
    catch (error) {
        console.log(error);
    }
};
exports.setBoardMatrix = setBoardMatrix;
const disconnect = (socket, io, data) => {
    var _a;
    console.log(`${socket.id} disconnected!`);
    (0, exports.leaveOrDisconnect)(data, socket.roomId, !!((_a = io.sockets.adapter.rooms.get(socket.roomId)) === null || _a === void 0 ? void 0 : _a.size), socket.id);
    io.to(socket.roomId).emit('getRoomData', data[socket.roomId]);
};
exports.disconnect = disconnect;
const leaveRoom = (socket, io, data, roomId) => {
    var _a;
    socket.leave(roomId);
    console.log(`${socket.id} has left room ${roomId}!`);
    (0, exports.leaveOrDisconnect)(data, roomId, !!((_a = io.sockets.adapter.rooms.get(roomId)) === null || _a === void 0 ? void 0 : _a.size), socket.id);
    io.to(roomId).emit('getRoomData', data[roomId]);
};
exports.leaveRoom = leaveRoom;
