import { Router } from "express";
import userControlers from "../controller/userControlers.js";

const router = Router();

router.post("/users", userControlers.createUserController);

export default router