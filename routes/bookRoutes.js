import { Router } from 'express';
import { getAllBooks, addBook, updateBook, deleteBook, getRandomBook } from '../controller/bookController.js';

const router = Router();

router.get('/books', getAllBooks);
router.post('/books', addBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);
router.get('/books/recommendations', getRandomBook);

export default router;
