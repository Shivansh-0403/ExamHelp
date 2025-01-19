import mongoose from "mongoose";

const booksSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export const Books = mongoose.model('Book', booksSchema);
