import express from "express";
import { Notes } from "../models/notesModel.js";
const allNotesRouter = express.Router();

allNotesRouter.get("/", async (req, res) => {
  try {
    const allNotes = await Notes.find();
    return res.status(200).send(allNotes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

export default allNotesRouter;
