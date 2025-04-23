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

async function findAllUsersService() {
    const users = await userRepositories.findAllUsersRepository()
    return users
}

async function findUserByIdService(id) {
    const user = await userRepositories.findUserByIdRepository(id)
    if (!user) throw new Error("Usuário não encontrado")
    return user
}

async function updateUserService (newUser, userId) {
    const user = await userRepositories.findUserByIdRepository(userId);
    if (!user) throw new Error("Usuário não encontrado");
    if (newUser.password) {
        newUser.password = await bcrypt.hash(newUser.password, 10);
    }
    const userUpdated = await userRepositories.updateUserRepository(userId, newUser);
    return userUpdated
}

async function deleteUserService(userId) {
    const user = await userRepositories.findUserByIdRepository(userId)
    if (!user) throw new Error("Usuário não encontrado")
    const {message} = await userRepositories.deleteRepository(userId)
    return message;
}

export default { createUserService, findAllUsersService, findUserByIdService, updateUserService, deleteUserService }
