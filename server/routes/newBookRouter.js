import express from "express";
import { Book } from "../models/bookModel.js";
const newBookRouter = express.Router();

newBookRouter.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "one or more fields missing!" });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
      link: req.body.link,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

export default newBookRouter;
