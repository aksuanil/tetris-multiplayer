import { Server, Socket } from "socket.io";
import { Storage, SeatStatus, RoomData, RoomStatus } from "./types";

export const setSeatStatus = (roomData: RoomData, seatId: number, seatStatus: SeatStatus) => {
    try {
        switch (seatId) {
            case 0:
                if (seatStatus === SeatStatus.EMPTY)
                    roomData.seatOne.id = ''
                if (seatStatus === SeatStatus.WON)
                    roomData.seatOne.status = SeatStatus.LOST
                roomData.seatOne.status = seatStatus
                break;
            case 1:
                if (seatStatus === SeatStatus.EMPTY)
                    roomData.seatTwo.id = ''
                if (seatStatus === SeatStatus.WON)
                    roomData.seatTwo.status = SeatStatus.LOST
                roomData.seatTwo.status = seatStatus
                break;
            default:
                break;
        }

    } catch (error) {
        console.log(error)
    }
}

export const setStatus = (roomData: RoomData, status: RoomStatus) => {
    try {
        roomData.status = status
    } catch (error) {
        console.log(error)
    }
}

export const setGameOver = (roomData: RoomData, seatId: number) => {
    try {
        switch (seatId) {
            case 0:
                roomData.seatOne.status = SeatStatus.WON
                roomData.seatTwo.status = SeatStatus.LOST
                break;
            case 1:
                roomData.seatOne.status = SeatStatus.LOST
                roomData.seatTwo.status = SeatStatus.WON
                break;
            default:
                break;
        }
        roomData.status = RoomStatus.FINISHED
    } catch (error) {
        console.log(error)
    }
}

export const setScore = (roomData: RoomData, seatId: number, info: { score: number, lines: number, blockQueue: [] }) => {
    try {
        switch (seatId) {
            case 0:
                roomData.seatOne.score = info.score
                roomData.seatOne.lines = info.lines
                roomData.seatOne.blockQueue = info.blockQueue
                break;
            case 1:
                roomData.seatTwo.score = info.score
                roomData.seatTwo.lines = info.lines
                roomData.seatTwo.blockQueue = info.blockQueue
                break;
            default:
                break;
        }
        if (info.score > 7000) {
            setGameOver(roomData, seatId)
        }
    } catch (error) {
        console.log(error)
    }
}

export const setBlockQueue = (roomData: RoomData, seatId: number, blockQueue: []) => {
    try {
        switch (seatId) {
            case 0:
                roomData.seatOne.blockQueue = blockQueue
                break;
            case 1:
                roomData.seatTwo.blockQueue = blockQueue
                break;
            default:
                break;
        }
    } catch (error) {
        console.log(error)
    }
}

export const leaveOrDisconnect = (data: Storage, roomId: string, isPopulated: boolean, currentId: string) => {
    try {
        if (!data[roomId]) return
        const { id, seatOne, seatTwo, spectators } = data[roomId]

        if (!isPopulated) {
            delete data[id];
            console.log(`Room ${id} deleted`)
            return;
        }
        if (seatOne.id === currentId) { seatOne.id = ''; seatOne.username = ''; seatOne.status = 0; }
        if (seatTwo.id === currentId) { seatTwo.id = ''; seatTwo.username = ''; seatTwo.status = 0; }
        data[roomId].spectators = spectators.filter((item) => item !== currentId)
    } catch (error) {
        console.log(error)
    }
}

export const setBoardMatrix = (roomData: RoomData, roomId: string, seatId: number, boardMatrix: [], io: Server) => {
    try {
        switch (seatId) {
            case 0:
                roomData.seatOne.boardMatrix = boardMatrix
                break;
            case 1:
                roomData.seatTwo.boardMatrix = boardMatrix
                break;
        }
        io.to(roomId).emit('getBoardMatrix', seatId, boardMatrix)
    } catch (error) {
        console.log(error)
    }
}

export const disconnect = (socket: Socket, io: Server, data: Storage) => {
    console.log(`${socket.id} disconnected!`);

    leaveOrDisconnect(data, socket.roomId, !!io.sockets.adapter.rooms.get(socket.roomId)?.size, socket.id)
    io.to(socket.roomId).emit('getRoomData', data[socket.roomId]);
}

export const leaveRoom = (socket: Socket, io: Server, data: Storage, roomId: string) => {
    socket.leave(roomId);
    console.log(`${socket.id} has left room ${roomId}!`);

    leaveOrDisconnect(data, roomId, !!io.sockets.adapter.rooms.get(roomId)?.size, socket.id)
    io.to(roomId).emit('getRoomData', data[roomId])
}