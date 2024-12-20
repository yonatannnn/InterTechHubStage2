# InterTechHubStage2

## Books Collection API

This API allows you to manage a collection of books. You can add, update, delete, and retrieve books, as well as get a random book recommendation.

### Endpoints

- `GET /books`: Retrieve all books
- `POST /books`: Add a new book
- `PUT /books/:id`: Update an existing book by ID
- `DELETE /books/:id`: Delete a book by ID
- `GET /books/recommendations`: Get a random book recommendation

### Example Code

```javascript
import { Router } from 'express';
import { getAllBooks, addBook, updateBook, deleteBook, getRandomBook } from '../controller/bookController.js';

const router = Router();

router.get('/books', getAllBooks);
router.post('/books', addBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);
router.get('/books/recommendations', getRandomBook);

export default router;
```

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the server: `npm start`

### License

This project is licensed under the MIT License.
