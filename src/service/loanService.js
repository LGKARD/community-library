import loanRepositories from "../repositories/loanRepositories.js";

async function createLoanService(userId, bookId, dueDate) {
    const createdLoan = await loanRepositories.createLoanRepository(userId, bookId, dueDate);
    if (!createdLoan) throw new Error("Erro ao criar empréstimo");
    return createdLoan;
}

async function findAllLoansService() {
    const loans = await loanRepositories.findAllLoansRepository();
    return loans;
}

export default { createLoanService, findAllLoansService };