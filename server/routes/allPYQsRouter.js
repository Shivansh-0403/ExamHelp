import express from "express";
import { PYQs } from "../models/pyqModel.js";
const allPYQsRouter = express.Router();

allPYQsRouter.get("/", async (req, res) => {
  try {
    const allPYQs = await PYQs.find();
    return res.status(200).send(allPYQs);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

export default allPYQsRouter;
