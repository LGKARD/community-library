import jwt from "jsonwebtoken";
import "dotenv/config";
import userRepositories from "../repositories/userRepositories.js";
import bcrypt from "bcrypt"

function generateJWT(id) {
    return jwt.sign({id}, process.env.SECRET_JWT, {expiresIn: '86400'});
}

async function loginService(email, password) {
    const user = await userRepositories.findUserByEmailRepository(email)
    if (!user) throw new Error("Usuário não encontrado")
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) throw new Error("Senha inválida")
    const token = generateJWT(user.id)
    return token
}

export { generateJWT, loginService }