import express from "express";
import { Books } from "../models/booksModel.js";
import { fetchAllBooks } from "../controllers/booksController.js";
const allBooksRouter = express.Router();

allBooksRouter.get("/", fetchAllBooks);

export default allBooksRouter;
