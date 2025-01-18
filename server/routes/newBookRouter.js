import express from "express";
import { upload } from "../middlewares/multer.js";
import { createBooks } from "../controllers/bookController.js";

const newBooksRouter = express.Router();

newBooksRouter.post("/upload", upload.single("file"), createBooks);

export default newBooksRouter;