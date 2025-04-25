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

async function findBookByIdService(bookId) {
    const book = await bookRepositories.findBookByIdRepository(bookId);
    if (!book) throw new Error("Livro não encontrado");
    return book;
}

async function updateBookService(updatedBook, bookId, userId) {
    const book = await bookRepositories.findBookByIdRepository(bookId);
    if (!book) throw new Error("Livro não encontrado");
    if (book.userId !== userId) throw new Error("Usuário não autorizado");
    const response = await bookRepositories.updateBookRepository(updatedBook, bookId);
    return response
}

async function deleteBookService(bookId, userId) {
    const book = await bookRepositories.findBookByIdRepository(bookId);
    if (!book) throw new Error("Livro não encontrado");
    if (book.userId !== userId) throw new Error("Usuário não autorizado");
    const response = await bookRepositories.deleteBookRepository(bookId);
    return response
}

export default { createBookService, findAllBooksService, findBookByIdService, updateBookService, deleteBookService }