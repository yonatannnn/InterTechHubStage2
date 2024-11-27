import Book from '../models/bookModel.js';

export async function getAllBooks(req, res) {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
}

export async function addBook(req, res) {
  try {
    const { title, author, isbn, publishedYear } = req.body;
    const book = new Book({ title, author, isbn, publishedYear });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error adding book', error });
  }
}

export async function updateBook(req, res) {
  try {
    const { id } = req.params;
    const { title, author, isbn, publishedYear } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, isbn, publishedYear },
      { new: true, runValidators: true }
    );
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error });
  }
}

export async function deleteBook(req, res) {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
}

export async function getRandomBook(req, res) {
  try {
    const books = await Book.find();
    if (!books.length) {
      return res.status(404).json({ message: 'No books available for recommendation' });
    }
    const randomBook = books[Math.floor(Math.random() * books.length)];
    res.status(200).json(randomBook);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recommendation', error });
  }
}
