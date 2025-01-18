import express from "express";
import { upload } from "../middlewares/multer.js";
import { createNotes } from "../controllers/notesController.js";

const newNotesRouter = express.Router();

newNotesRouter.post("/upload", upload.single("file"), createNotes);

export default newNotesRouter;