import { changeHexColor } from "./helpers/helpers"
import { ColorSettings, HEX } from "./types"

export const gameSettings = {
    canvasSize: {
        width: 400,
        height: 880 // 600
    },
    boardSize: {
        x: 10,
        y: 20,
        trueY: 23
    },
    blockSize: {
        x: () => gameSettings.canvasSize.width / gameSettings.boardSize.x,
        y: () => gameSettings.canvasSize.height / gameSettings.boardSize.y,
    },
    dropTick: 600,
    shadowX: 0,
    shadowY: -2,
    totalBoardSize: {
        x: () => 10 + Math.abs(gameSettings.shadowX),
        y: () => 20 + Math.abs(gameSettings.shadowY)
    }
}

export const colors: ColorSettings = {
    background: '#CF2F36',
    gapBorders: '#5e4e4e5d',
    blocks: {
        blockO: '#DC143C', //
        blockL: '#008080',
        blockT: '#87CEEB',
        blockZ: '#FFA500', //
        blockS: '#9400D3', //
        blockJ: '#FF69B4',
        blockI: '#98FB98',
    }
}

export const colorsLight: any = {
    [colors.blocks.blockO]: changeHexColor(colors.blocks.blockO, 20),
    [colors.blocks.blockL]: changeHexColor(colors.blocks.blockL, 20),
    [colors.blocks.blockT]: changeHexColor(colors.blocks.blockT, 20),
    [colors.blocks.blockZ]: changeHexColor(colors.blocks.blockZ, 20),
    [colors.blocks.blockS]: changeHexColor(colors.blocks.blockS, 20),
    [colors.blocks.blockJ]: changeHexColor(colors.blocks.blockJ, 20),
    [colors.blocks.blockI]: changeHexColor(colors.blocks.blockI, 20),
}

export const colorsDark: any = {
    [colors.blocks.blockO]: changeHexColor(colors.blocks.blockO, -20),
    [colors.blocks.blockL]: changeHexColor(colors.blocks.blockL, -20),
    [colors.blocks.blockT]: changeHexColor(colors.blocks.blockT, -20),
    [colors.blocks.blockZ]: changeHexColor(colors.blocks.blockZ, -20),
    [colors.blocks.blockS]: changeHexColor(colors.blocks.blockS, -20),
    [colors.blocks.blockJ]: changeHexColor(colors.blocks.blockJ, -20),
    [colors.blocks.blockI]: changeHexColor(colors.blocks.blockI, -20),
}

export const createPattern = (canvasContext: CanvasRenderingContext2D, color: HEX) => {
    const patternCanvas = document.createElement("canvas");
    const patternContext = patternCanvas.getContext("2d");
    if (patternContext === null) return

    patternCanvas.width = gameSettings.blockSize.x();
    patternCanvas.height = gameSettings.blockSize.x();
    const blockColor = color;

    let topWidth = patternCanvas.width;
    let bottomWidth = patternCanvas.width - 10;
    const height = 5;
    let startX = 0;
    let startY = 0;

    patternContext.fillStyle = blockColor;
    patternContext.fillRect(0, 0, 60, 60);

    // top
    patternContext.beginPath();
    patternContext.moveTo(startX, startY);
    patternContext.lineTo(startX + topWidth, startY);
    patternContext.lineTo(startX + bottomWidth + (topWidth - bottomWidth) / 2, startY + height);
    patternContext.lineTo(startX - (bottomWidth - topWidth) / 2, startY + height);
    patternContext.closePath();

    patternContext.fillStyle = colorsLight[blockColor]
    patternContext.fill();

    // left
    startX = -patternCanvas.width / 2;
    startY = patternCanvas.width / 2;

    patternContext.translate(startX, startY);
    patternContext.rotate(270 * Math.PI / 180); // Convert degrees to radians

    patternContext.beginPath();
    patternContext.moveTo(startX, startY);
    patternContext.lineTo(startX + topWidth, startY);
    patternContext.lineTo(startX + bottomWidth + (topWidth - bottomWidth) / 2, startY + height);
    patternContext.lineTo(startX - (bottomWidth - topWidth) / 2, startY + height);
    patternContext.closePath();

    patternContext.fillStyle = colorsLight[blockColor]
    patternContext.fill();

    // bottom
    startX = -patternCanvas.width;

    patternContext.translate(startX, startY);
    patternContext.rotate(270 * Math.PI / 180); // Convert degrees to radians

    patternContext.beginPath();
    patternContext.moveTo(startX, startY);
    patternContext.lineTo(startX + topWidth, startY);
    patternContext.lineTo(startX + bottomWidth + (topWidth - bottomWidth) / 2, startY + height);
    patternContext.lineTo(startX - (bottomWidth - topWidth) / 2, startY + height);
    patternContext.closePath();

    patternContext.fillStyle = colorsDark[blockColor]
    patternContext.fill();

    // right
    topWidth = patternCanvas.width - height * 2;
    bottomWidth = patternCanvas.width;
    startX = patternCanvas.width / 2 + height;
    startY = patternCanvas.width - height;
    patternContext.rotate(90 * Math.PI / 180); // Convert degrees to radians

    patternContext.beginPath();
    patternContext.moveTo(startX, startY);
    patternContext.lineTo(startX + topWidth, startY);
    patternContext.lineTo(startX + bottomWidth + (topWidth - bottomWidth) / 2, startY + height);
    patternContext.lineTo(startX - (bottomWidth - topWidth) / 2, startY + height);
    patternContext.closePath();

    patternContext.fillStyle = colorsDark[blockColor]
    patternContext.fill();

    const pattern = canvasContext.createPattern(patternCanvas, "repeat");
    return pattern;
}