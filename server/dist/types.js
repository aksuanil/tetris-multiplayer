"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerStatus = exports.SeatStatus = exports.RoomStatus = void 0;
var RoomStatus;
(function (RoomStatus) {
    RoomStatus[RoomStatus["WAITING"] = 0] = "WAITING";
    RoomStatus[RoomStatus["READY"] = 1] = "READY";
    RoomStatus[RoomStatus["INTERMISSION"] = 2] = "INTERMISSION";
    RoomStatus[RoomStatus["PLAYING"] = 3] = "PLAYING";
    RoomStatus[RoomStatus["FINISHED"] = 4] = "FINISHED";
})(RoomStatus = exports.RoomStatus || (exports.RoomStatus = {}));
var SeatStatus;
(function (SeatStatus) {
    SeatStatus[SeatStatus["EMPTY"] = 0] = "EMPTY";
    SeatStatus[SeatStatus["READY"] = 1] = "READY";
    SeatStatus[SeatStatus["NOT_READY"] = 2] = "NOT_READY";
    SeatStatus[SeatStatus["PLAYING"] = 3] = "PLAYING";
    SeatStatus[SeatStatus["LOST"] = 4] = "LOST";
    SeatStatus[SeatStatus["WON"] = 5] = "WON";
})(SeatStatus = exports.SeatStatus || (exports.SeatStatus = {}));
var PlayerStatus;
(function (PlayerStatus) {
    PlayerStatus[PlayerStatus["NOT_READY"] = 0] = "NOT_READY";
    PlayerStatus[PlayerStatus["READY"] = 1] = "READY";
    PlayerStatus[PlayerStatus["PLAYING"] = 2] = "PLAYING";
    PlayerStatus[PlayerStatus["LOST"] = 3] = "LOST";
    PlayerStatus[PlayerStatus["WON"] = 4] = "WON";
    PlayerStatus[PlayerStatus["SPECTATOR"] = 5] = "SPECTATOR";
})(PlayerStatus = exports.PlayerStatus || (exports.PlayerStatus = {}));
