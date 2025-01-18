import express from "express";
import { Books } from "../models/bookModel.js";
const allBooksRouter = express.Router();

allBooksRouter.get("/", async (req, res) => {
  try {
    const allBooks = await Books.find();
    return res.status(200).send(allBooks);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

export default allBooksRouter;
