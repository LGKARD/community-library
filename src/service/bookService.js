import bookRepositories from "../repositories/bookRepositories.js";

async function createBookService(newBook, userId) {
    const createdBook = await bookRepositories.createBookRepository(newBook, userId);
    if (!createdBook) throw new Error("Erro ao criar livro");
    return createdBook;
}

async function findAllBooksService() {
    const books = await bookRepositories.findAllBooksRepository();
    return books;
}

export default { createBookService, findAllBooksService }