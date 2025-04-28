import { Router } from "express";
import loanController from "../controller/loanControler.js";
import { validate } from "../middlewares/validationMiddleware.js";
import { loanSchema } from "../schema/loanSchema.js";

const router = Router();

router.post("/loans", validate(loanSchema), loanController.createLoanController);
router.get("/loans", loanController.findAllLoansController);

export default router