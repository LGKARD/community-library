import { userIdSchema } from "../schema/userSchema.js";
import { bookIdSchema } from "../schema/bookSchema.js";
import { loanIdSchema } from "../schema/loanSchema.js";

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

const validateBookId = (req, res, next) => {
    try {
        const bookId = +req.params.id;
        bookIdSchema.parse({ bookId: bookId });
        next();
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

const validateLoanId = (req, res, next) => {
    try {
        const loanId = +req.params.id;
        loanIdSchema.parse({ loanId: loanId });
        next();
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

export { validate, validateUserId, validateBookId, validateLoanId };