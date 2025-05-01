import db from "../config/database.js";

db.run(`CREATE TABLE IF NOT EXISTS loans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bookId INTEGER NOT NULL,
    userId INTEGER NOT NULL,
    dueDate DATE,
    FOREIGN KEY(bookId) REFERENCES books(id),
    FOREIGN KEY(userId) REFERENCES users(id)
)`)

function createLoanRepository(userId, bookId, dueDate) {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO loans (userId, bookId, dueDate) VALUES (?, ?, ?)`, [userId, bookId, dueDate], function (err) {
            if (err) {
                reject(err)
            } else {
                resolve({ id: this.lastID, userId, bookId })
            }
        })
    })
}

function findAllLoansRepository() {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM loans`, [], function (err, rows) {
            if (err) {
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}

function findLoanByIdRepository(loanId) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM loans WHERE id = ?`, [loanId], function (err, row) {
            if (err) {
                reject(err)
            } else {
                resolve(row)
            }
        })
    })
}

function deleteLoanRepository(loanId) {
    return new Promise((resolve, reject) => {
        db.run(`DELETE FROM loans WHERE id = ?`, [loanId], function (err) {
            if (err) {
                reject(err)
            } else {
                resolve({ message: "Empréstimo deletado com sucesso", id: loanId })
            }
        })
    })
}

export default { createLoanRepository, findAllLoansRepository, findLoanByIdRepository, deleteLoanRepository }