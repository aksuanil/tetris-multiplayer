export interface Storage extends Record<string, RoomData> {
    ["roomId"]: {
        id: string,
        seatOne: {
            id: string,
            username: string,
            status: SeatStatus,
            boardMatrix: [],
            score: number,
            lines: number,
            blockQueue: []
        },
        seatTwo: {
            id: string,
            username: string,
            status: SeatStatus,
            boardMatrix: [],
            score: number,
            lines: number,
            blockQueue: []
        },
        spectators: Array<string>
        status: RoomStatus
    }
}

export type RoomData = {
    id: string;
    seatOne: {
        id: string,
        username: string,
        status: SeatStatus,
        boardMatrix: [],
        score: number,
        lines: number,
        blockQueue: []
    };
    seatTwo: {
        id: string,
        username: string,
        status: SeatStatus,
        boardMatrix: [],
        score: number,
        lines: number,
        blockQueue: []
    };
    spectators: Array<string>
    status: RoomStatus
};

export enum RoomStatus {
    WAITING = 0,
    READY = 1,
    INTERMISSION = 2,
    PLAYING = 3,
    FINISHED = 4,
}

export enum SeatStatus {
    EMPTY = 0,
    READY = 1,
    NOT_READY = 2,
    PLAYING = 3,
    LOST = 4,
    WON = 5,
}

export enum PlayerStatus {
    NOT_READY = 0,
    READY = 1,
    PLAYING = 2,
    LOST = 3,
    WON = 4,
    SPECTATOR = 5,
}

export type Highscores = HighscoreUser[]

export type HighscoreUser = {
    id: string;
    username: string;
    score: number;
}
