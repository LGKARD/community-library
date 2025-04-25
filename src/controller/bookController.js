import bookService from "../service/bookService.js";

async function createBookController(req, res) {
    const newBook  = req.body;
    const userId = req.userId;
    try {
        const createdBook = await bookService.createBookService(newBook, userId);
        res.status(201).send(createdBook);
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

async function findAllBooksController(req, res) {
    try {
        const books = await bookService.findAllBooksService();
        res.status(200).send(books);
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

export default { createBookController, findAllBooksController }