import { Router } from "express";
import userControlers from "../controller/userControlers.js";
import {validate, validateUserId} from "../middlewares/validationMiddleware.js";
import { userSchema } from "../schema/userSchema.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/users", validate(userSchema), userControlers.createUserController);
router.post("/users/login", userControlers.loginUserController);

router.use(authMiddleware);

router.get("/users", userControlers.findAllUsersController);
router.get("/users/:id", validateUserId, userControlers.findUserByIdController);

router.patch("/users/:id", validateUserId, userControlers.updateUserController);

router.delete("/users/:id", validateUserId, userControlers.deleteUserController);

export default router

