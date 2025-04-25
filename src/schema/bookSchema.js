import { z } from "zod";

const bookSchema = z.object({
    title: z.string().min(3, "O título deve ter pelo menos 3 caracteres").max(100, "O título deve ter no máximo 100 caracteres"),
    author: z.string().min(3, "O autor deve ter pelo menos 3 caracteres").max(100, "O autor deve ter no máximo 100 caracteres")
});

export { bookSchema };