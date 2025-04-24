import userServices from "../service/userServices.js";

async function createUserController(req, res) {
    const newUser = req.body;

    try {
        const token = await userServices.createUserService(newUser);
        res.status(201).send({token});
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

async function findAllUsersController(req, res) {
    try {
        const users = await userServices.findAllUsersService();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

async function findUserByIdController(req, res) {
    const {id} = req.params;

    try {    
        const user = await userServices.findUserByIdService(id);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

async function updateUserController(req, res) {
    const {id} = req.params;
    const newUser = req.body;

    try {    
        const user = await userServices.updateUserService(newUser, id);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

async function deleteUserController(req, res) {
    const {id} = req.params;

    try {    
        const message = await userServices.deleteUserService(id);
        res.status(200).send(message);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

export default { createUserController, findAllUsersController, findUserByIdController, updateUserController, deleteUserController }