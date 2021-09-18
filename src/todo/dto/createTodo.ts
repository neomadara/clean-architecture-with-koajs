import { z } from "zod";

export const createTodoSchema = z.object({
    title: z.string(),
})
