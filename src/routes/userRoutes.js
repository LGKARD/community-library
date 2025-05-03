import { Router } from "express";
import userControlers from "../controller/userControlers.js";
import {validate, validateUserId} from "../middlewares/validationMiddleware.js";
import { userSchema } from "../schema/userSchema.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/", validate(userSchema), userControlers.createUserController);
router.post("/login", userControlers.loginUserController);

router.use(authMiddleware);

router.get("/", userControlers.findAllUsersController);
router.get("/:id", validateUserId, userControlers.findUserByIdController);

router.patch("/:id", validateUserId, userControlers.updateUserController);

router.delete("/:id", validateUserId, userControlers.deleteUserController);

export default router

