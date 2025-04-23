import {z} from "zod";

const userSchema = z.object({
    username: z.string().min(3, 'O usuário deve ter pelo menos 3 caracteres'),
    email: z.string().email('E-mail inválido'),
    password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
    avatar: z.string().optional()
});

const userIdSchema = z.object({
    userId: z.number().int().positive(
        'O id do usuário deve ser um número inteiro positivo'
    )
})

export {userSchema, userIdSchema}