import { colors, createPattern, gameSettings } from "../gameSettings";

export class GameRenderer {
    private static blockSize = gameSettings.blockSize.x();
    private static boardWidth = gameSettings.boardSize.x;
    private static boardHeight = gameSettings.boardSize.trueY;
    public static colorsPattern: any
    canvasContext: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this.canvasContext = ctx;
        GameRenderer.colorsPattern = {
            1: createPattern(ctx, colors.blocks.blockO),
            2: createPattern(ctx, colors.blocks.blockL),
            3: createPattern(ctx, colors.blocks.blockT),
            4: createPattern(ctx, colors.blocks.blockZ),
            5: createPattern(ctx, colors.blocks.blockS),
            6: createPattern(ctx, colors.blocks.blockJ),
            7: createPattern(ctx, colors.blocks.blockI),
        };
    }

    public renderBoard = (matrix: number[][]) => {
        this.canvasContext.clearRect(0, 0, gameSettings.canvasSize.width, gameSettings.canvasSize.height);

        for (let y = 2; y < GameRenderer.boardHeight - 1; y++) {
            for (let x = 0; x < GameRenderer.boardWidth; x++) {
                this.canvasContext.strokeStyle = colors.gapBorders;
                this.canvasContext.strokeRect(
                    x * GameRenderer.blockSize,
                    y * GameRenderer.blockSize,
                    GameRenderer.blockSize,
                    GameRenderer.blockSize
                );
                if (matrix[y][x] > 0) {
                    this.canvasContext.fillStyle = GameRenderer.colorsPattern[matrix[y][x]];
                    this.canvasContext.fillRect(x * GameRenderer.blockSize, y * GameRenderer.blockSize, GameRenderer.blockSize, GameRenderer.blockSize);
                }
            }
        }
    };
}
