import { z } from "zod";

const loanSchema = z.object({
    bookId: z.number().int().positive("O id do livro deve ser um número inteiro positivo"),
    dueDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).min(10, "A data de devolução deve seguir o padrão YYYY-MM-DD").max(10, "A data de devolução deve seguir o padrão YYYY-MM-DD")
});

const loanIdSchema = z.object({
    loanId: z.number().int().positive("O id do empréstimo deve ser um número inteiro positivo")
})

export { loanSchema, loanIdSchema };