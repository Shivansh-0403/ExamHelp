import express from "express";
import { Notes } from "../models/notesModel.js";
const newNotesRouter = express.Router();

newNotesRouter.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.courseTitle || !req.body.courseCode || !req.body.link) {
      return res.status(400).send({ message: "one or more fields missing!" });
    }
    const newNotes = {
      title: req.body.title,
      courseTitle: req.body.courseTitle,
      courseCode: req.body.courseCode,
      link: req.body.link,
    };
    const notes = await Notes.create(newNotes);
    return res.status(201).send(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});
export default newNotesRouter;