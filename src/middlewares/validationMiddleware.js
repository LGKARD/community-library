import { userIdSchema } from "../schema/userSchema.js";

const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

const validateUserId = (req, res, next) => {
    try {
        const userId = +req.params.id;
        userIdSchema.parse({ userId: userId });
        next();
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

export { validate, validateUserId }