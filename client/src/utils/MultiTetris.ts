import { clearInterval, setInterval } from 'worker-timers';
import { Socket } from 'socket.io-client';
import { PlayerData } from '../Pages/Lobby/types';
import { colors, gameSettings } from '../gameSettings';
import { GameRenderer } from './GameRenderer';
import { SoundManager } from './SoundManager';
import { Block } from '../types';

export class MultiTetris {
    render: GameRenderer

    constructor(socket: Socket, roomId: string, playerData: PlayerData, ctx: CanvasRenderingContext2D) {
        this.socket = socket;
        this.roomId = roomId;
        this.playerData = playerData;

        this.render = new GameRenderer(ctx)

    }
    // Properties
    matrix: number[][] = Array(23).fill(undefined).map((val, i) => i === 22 ? new Array(10).fill(1) : new Array(10).fill(0));
    allPieces: Block[] = [
        { id: 1, name: 'O', color: colors.blocks.blockO, matrix: [[1, 1], [1, 1]] },
        { id: 2, name: 'L', color: colors.blocks.blockL, matrix: [[0, 0, 2], [2, 2, 2]] },
        { id: 3, name: 'T', color: colors.blocks.blockT, matrix: [[0, 3, 0], [3, 3, 3]] },
        { id: 4, name: 'Z', color: colors.blocks.blockZ, matrix: [[4, 4, 0], [0, 4, 4]] },
        { id: 5, name: 'S', color: colors.blocks.blockS, matrix: [[0, 5, 5], [5, 5, 0]] },
        { id: 6, name: 'J', color: colors.blocks.blockJ, matrix: [[6, 0, 0], [6, 6, 6]] },
        { id: 7, name: 'I', color: colors.blocks.blockI, matrix: [[7, 7, 7, 7]] },
    ];
    blockQueue: Block[] = [
        structuredClone(this.allPieces[Math.floor(Math.random() * 7)]),
        structuredClone(this.allPieces[Math.floor(Math.random() * 7)]),
        structuredClone(this.allPieces[Math.floor(Math.random() * 7)]),
        structuredClone(this.allPieces[Math.floor(Math.random() * 7)])
    ];
    currentBlock: Block = this.blockQueue[0];
    pieceX = 4;
    pieceY = -2;
    tickDown = 0;
    score = 0;
    lines = 0;
    isGameOver = false;
    isTerminated = false;
    socket: Socket;
    roomId: string;
    playerData: PlayerData;

    private setBoardMatrix = () => {
        this.socket.emit('room-data', 'board-matrix', { roomId: this.roomId, seatId: this.playerData.seatId, boardMatrix: this.matrix });
    }
    private setScore = () => {
        this.socket.emit('room-data', 'score', { roomId: this.roomId, seatId: this.playerData.seatId, info: { score: this.score, lines: this.lines, blockQueue: this.blockQueue } });
    }
    private wonGame = () => {
        this.socket.emit('room-data', 'game-over', { roomId: this.roomId, seatId: this.playerData.seatId });
    }
    private loseGame = () => {
        this.socket.emit('room-data', 'game-over', { roomId: this.roomId, seatId: this.playerData.seatId === 0 ? 1 : 0 });
    }
    private setBlockQueue = () => {
        this.socket.emit('room-data', 'block-queue', { roomId: this.roomId, seatId: this.playerData.seatId, blockQueue: this.blockQueue });
    }
    public startGame(): void {
        this.setBlockQueue();
        this.setBoardMatrix();
        this.tickDown = setInterval(() => {
            this.moveCurrentBlock('DOWN')
        }, gameSettings.dropTick);
    }
    public moveCurrentBlock(direction: string, isDrop?: boolean): any {
        if (this.isGameOver) return
        if (direction == 'LEFT' && this.pieceX === 0) return;
        if (direction == 'RIGHT' && this.pieceX === 10 - this.currentBlock.matrix[0].length) return;

        const lastX = this.pieceX;
        const lastY = this.pieceY;
        const iteratedBoard = JSON.parse(JSON.stringify(this.matrix));
        let collision = false;
        switch (direction) {
            case 'DOWN':
                this.pieceY = Math.min(this.pieceY + 1, 23 - this.currentBlock.matrix.length)
                break;
            case 'LEFT':
                this.pieceX = Math.max(this.pieceX - 1, 0)
                break;
            case 'RIGHT':
                this.pieceX = Math.min(this.pieceX + 1, 10 - this.currentBlock.matrix[0].length)
                break;
            default:
                break;
        }
        for (let y = 0; y < this.currentBlock.matrix.length; y++) {
            for (let x = 0; x < this.currentBlock.matrix[y].length; x++) {
                if (iteratedBoard[y + lastY] && this.currentBlock.matrix[y][x] > 0) {
                    iteratedBoard[y + lastY][x + lastX] = 0;
                }
            }
        }
        for (let y = 0; y < this.currentBlock.matrix.length; y++) {
            for (let x = 0; x < this.currentBlock.matrix[y].length; x++) {
                if (iteratedBoard[y + lastY] && this.currentBlock.matrix[y][x] > 0) {
                    if (iteratedBoard[y + this.pieceY][x + this.pieceX] > 0) collision = true
                    iteratedBoard[y + this.pieceY][x + this.pieceX] = this.currentBlock.id;
                }
            }
        }
        if (collision && direction !== 'DOWN') {
            this.pieceX = lastX
            this.pieceY = lastY
            return
        }
        else if (!collision) {
            this.matrix = iteratedBoard
            if (direction === 'DOWN') {
                clearInterval(this.tickDown)
                this.tickDown = setInterval(() => {
                    this.moveCurrentBlock('DOWN')
                    this.render.renderBoard(this.matrix)
                }, gameSettings.dropTick);
            }
            !isDrop && SoundManager.getInstance().playSound('move');
            this.setBoardMatrix();
            this.render.renderBoard(this.matrix)
        }
        else {
            clearInterval(this.tickDown)
            this.tickDown = setInterval(() => {
                this.moveCurrentBlock('DOWN');
                this.render.renderBoard(this.matrix)
            }, gameSettings.dropTick);

            if (this.checkGameOver()) {
                this.loseGame();
                this.isGameOver = true;
                return 'DROPPED'
            }

            this.createPiece();
            this.clearLines();
            return 'DROPPED'
        }
    }
    public dropBlock() {
        let result = null;
        while (result !== "DROPPED") {
            result = this.moveCurrentBlock('DOWN', true);
        }
        SoundManager.getInstance().playSound('drop')
    }
    public rotateCurrentBlock(): Block {
        let collision = false;
        const rotatedPiece = new Array(this.currentBlock.matrix[0].length);
        for (let i = 0; i < rotatedPiece.length; i++) {
            rotatedPiece[i] = new Array(this.currentBlock.matrix.length);
        }
        for (let y = 0; y < this.currentBlock.matrix.length; y++) {
            for (let x = 0; x < this.currentBlock.matrix[y].length; x++) {
                rotatedPiece[x][this.currentBlock.matrix.length - 1 - y] = this.currentBlock.matrix[y][x];
            }
        }
        for (let y = 0; y < this.currentBlock.matrix.length; y++) {
            for (let x = 0; x < this.currentBlock.matrix[y].length; x++) {
                if (this.matrix[y + this.pieceY] && this.currentBlock.matrix[y][x] > 0) {
                    if (9 - (rotatedPiece[0].length - 1) < this.pieceX) collision = true
                    this.matrix[y + this.pieceY][x + this.pieceX] = 0;
                }
            }
        }
        for (let y = 0; y < rotatedPiece.length; y++) {
            for (let x = 0; x < rotatedPiece[y].length; x++) {
                if (this.matrix[y + this.pieceY] && rotatedPiece[y][x] > 0) {
                    if (this.matrix[y + this.pieceY][x + this.pieceX] > 0) collision = true
                }
            }
        }
        if (!collision) {
            this.currentBlock.matrix = rotatedPiece;
            this.moveCurrentBlock('ROTATE')
        }
        return this.currentBlock;
    }
    public createPiece = () => {
        this.blockQueue.splice(0, 1);
        this.blockQueue.push(structuredClone(this.allPieces[Math.floor(Math.random() * 7)]));
        this.currentBlock = this.blockQueue[0]

        this.pieceX = 4
        this.pieceY = -2
        this.setBlockQueue();
    };
    public clearLines = () => {
        let count = 0;
        this.matrix.map((line, index) => {
            if (index !== 22 && !line.includes(0)) {
                this.matrix.splice(index, 1);
                this.matrix.unshift(new Array(10).fill(0));
                count++;
                this.lines++;
            }
        })
        if (count > 0) {
            this.score += count === 1 ? 100 : count < 4 ? count * 200 : count * 400;
            this.setScore();
            if (this.score >= 5000) {
                this.wonGame();
            }
            setTimeout(() => {
                this.render.renderBoard(this.matrix)
            }, 500)
            if (count == 4) {
                SoundManager.getInstance().playSound('tetrisClear');
                return;
            }
            SoundManager.getInstance().playSound('lineClear');
        }
    }
    public checkGameOver = () => {
        if (this.matrix.at(2)?.some(item => item > 0)) {
            return true;
        }
        return false;
    }
    public terminate(): void {
        if (this.isTerminated) return;
        this.isGameOver = true;
        this.isTerminated = true;
        clearInterval(this.tickDown)
    }
}