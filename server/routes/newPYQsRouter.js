import express from "express";
import { PYQs } from "../models/pyqModel.js";
const newPYQsRouter = express.Router();

newPYQsRouter.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.courseTitle || !req.body.courseCode || !req.body.link) {
      return res.status(400).send({ message: "one or more fields missing!" });
    }
    const newPYQs = {
      title: req.body.title,
      courseTitle: req.body.courseTitle,
      courseCode: req.body.courseCode,
      link: req.body.link,
    };
    const pyqs = await PYQs.create(newPYQs);
    return res.status(201).send(pyqs);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});
export default newPYQsRouter;