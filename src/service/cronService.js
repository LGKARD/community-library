import cron from "node-cron";
import loanRepositories from "../repositories/loanRepositories.js";
import moment from "moment";
import sendEmail from "./emailService.js";


cron.schedule("58 * * * *", async () => {
    const loans = await loanRepositories.findAllLoansRepository();
    const today = moment().startOf("day")

    loans.forEach(async (loan) => {
        const dueDate = moment(loan.dueDate).startOf("day");
        const reminderDueDate = moment(dueDate).subtract(1, "days");
        if (today.isSame(reminderDueDate)) {
            sendEmail(loan.email, loan.title, loan.dueDate)
        }
    })
});