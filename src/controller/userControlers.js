import userServices from "../service/userServices.js";

async function createUserController(req, res) {
    const newUser = req.body;

    try {
        const user = await userServices.createUserService(newUser);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

export default { createUserController }