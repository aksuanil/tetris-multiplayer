import { ZodIssue } from "zod"
import { HEX } from "../types"

export const getError = (name: string, errors: Array<ZodIssue>) => {
    const error = errors.find(error => error.path[0] === name)
    return error?.message

}

export const changeHexColor = (hex: HEX, percent: number): string => {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    percent = percent / 100;

    r = Math.round(Math.min(255, r * (1 + percent)));
    g = Math.round(Math.min(255, g * (1 + percent)));
    b = Math.round(Math.min(255, b * (1 + percent)));

    // Convert RGB to hex
    const rgb = (b | (g << 8) | (r << 16)).toString(16);
    return "#" + ("000000" + rgb).slice(-6);
}