import { Block } from "../Game/types"
import { PlayerStatus, SeatStatus } from "./enums"

export type RoomData = {
    id: string
    seatOne: {
        id: string,
        username: string,
        status: SeatStatus,
        lines: number,
        score: number,
        blockQueue: Block[]
    },
    seatTwo: {
        id: string,
        username: string,
        status: SeatStatus,
        lines: number,
        score: number,
        blockQueue: Block[]
    },
    spectators: Array<string>
    status: RoomStatus
}

export type Messages = Array<{
    username: string,
    message: string
}>

export type PlayerData = {
    id: string,
    seatId: 0 | 1,
    username: string,
    status: PlayerStatus
}