import bookController from "../controller/bookController.js";
import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {validate} from "../middlewares/validationMiddleware.js";
import { bookSchema } from "../schema/bookSchema.js";

const router = Router();

router.get("/books", bookController.findAllBooksController);

router.use(authMiddleware);

router.post("/books", validate(bookSchema), bookController.createBookController);

export default router