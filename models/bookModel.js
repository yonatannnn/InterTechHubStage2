import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
  publishedYear: { type: Number, required: true },
  favorite: { type: Boolean, default: false },
});

export default model('Book', bookSchema);
