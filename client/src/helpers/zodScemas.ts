import { z } from "zod";

export const joinFormSchema = z.object({
    joinName: z.object({
        value: z.string().min(1, { message: "Username name is required" }).max(16, { message: "Must be 16 or fewer characters long" }),
    }),
    lobbyName: z.object({
        value: z.string().min(1, { message: "Lobby name is required" }).length(6, { message: "Must be 6 characters long" }),
    })
});

export const createFormSchema = z.object({
    createName: z.object({
        value: z.string().min(1, { message: "Username name is required" }).max(16, { message: "Must be 16 or fewer characters long" }),
    })
});

export const soloFormSchema = z.object({
    soloName: z.object({
        value: z.string().min(1, { message: "Username name is required" }).max(16, { message: "Must be 16 or fewer characters long" }),
    })
});
