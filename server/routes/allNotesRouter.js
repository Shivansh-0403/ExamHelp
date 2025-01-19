import express from "express";
import { Notes } from "../models/notesModel.js";
import { fetchAllNotes } from "../controllers/notesController.js";
const allNotesRouter = express.Router();

allNotesRouter.get("/", fetchAllNotes);

export default allNotesRouter;

// import express from "express";
// import { Books } from "../models/booksModel.js";
// import { fetchAllBooks } from "../controllers/booksController.js";
// const allBooksRouter = express.Router();

// allBooksRouter.get("/", fetchAllBooks);

// export default allBooksRouter;

