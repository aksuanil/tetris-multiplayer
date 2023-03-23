import { Socket } from "socket.io-client";
import { colors, gameSettings } from "../gameSettings";
import { SoundManager } from "./SoundManager";
import { GameRenderer } from "./GameRenderer";
import { Block } from "../types";


export class SoloTetris {
    render: GameRenderer
    socket: Socket;
    username: string;
    forceUpdate: any;

    constructor(ctx: CanvasRenderingContext2D, forceUpdate: any, socket: Socket, username: string) {
        this.render = new GameRenderer(ctx)
        this.forceUpdate = forceUpdate;
        this.socket = socket;
        this.username = username;
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

    public startGame(): void {
        SoundManager.getInstance().playSound('start');
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
            this.render.renderBoard(this.matrix)
        }
        else {
            clearInterval(this.tickDown)
            if (this.checkGameOver()) {
                this.isGameOver = true;
                this.socket.emit('gameOver', { id: this.socket.id, username: this.username, score: this.score })
                SoundManager.getInstance().playSound('gameLose');
                this.forceUpdate();
            }
            this.tickDown = setInterval(() => {
                this.moveCurrentBlock('DOWN');
                this.render.renderBoard(this.matrix)
            }, gameSettings.dropTick);
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
        SoundManager.getInstance().playSound('error')

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
        this.forceUpdate();

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
            if (count == 4) {
                SoundManager.getInstance().playSound('tetrisClear');
                return;
            }
            SoundManager.getInstance().playSound('lineClear');
            this.render.renderBoard(this.matrix)
        }
    }
    public checkGameOver = () => {
        if (this.matrix.at(2)?.some(item => item > 0)) {
            SoundManager.getInstance().playSound('lose');
            return true;
        }
        return false;
    }
    public terminate(): void {
        this.isGameOver = true;
        clearInterval(this.tickDown)
    }
}
