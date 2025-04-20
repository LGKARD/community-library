import userRepositories from "../repositories/userRepositories.js";
import bcrypt from "bcrypt"

async function createUserService(newUser) {
    const foundUser = await userRepositories.findUserByEmailRepository(newUser.email)
    if (foundUser) throw new Error("Usuário já cadastrado")

    const passHash = await bcrypt.hash(newUser.password, 10)
    const user = await userRepositories.createUserRepository({...newUser, password: passHash})
    if (!user) throw new Error("Erro ao cadastrar usuário")
    return user
}

export default { createUserService }
