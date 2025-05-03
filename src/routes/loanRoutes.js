import { Router } from "express";
import loanController from "../controller/loanControler.js";
import { validate, validateLoanId } from "../middlewares/validationMiddleware.js";
import { loanSchema } from "../schema/loanSchema.js";

const router = Router();

router.post("/", validate(loanSchema), loanController.createLoanController);
router.get("/", loanController.findAllLoansController);
router.get("/:id", validateLoanId, loanController.findLoanByIdController);
router.delete("/:id", validateLoanId, loanController.deleteLoanController);

export default router