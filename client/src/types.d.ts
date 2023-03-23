type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export interface GameState {
    player: {
        pos: {
            x: number,
            y: number
        },
        vel: {
            x: number,
            y: number
        },
        snake: [
            {
                x: number,
                y: number
            },
            {
                x: number,
                y: number
            }
            , {
                x: number,
                y: number
            }
        ]
    },
    food: {
        x: number,
        y: number,
    },
    gridSize: number,
}

export interface Player {
    pos: {
        x: number;
        y: number;
    };
    vel: {
        x: number;
        y: number;
    };
    snake: [{
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }];
}

export type Block = {
    id: number,
    name: string,
    color: HEX,
    matrix: number[][]

}

export type ColorSettings = {
    background: HEX,
    gapBorders: HEX,
    blocks: {
        [blockName: string]: HEX
    }

}
