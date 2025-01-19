import express from "express";
// import { PYQs } from "../models/pyqsModel.js";
import { fetchAllPYQs } from "../controllers/pyqsController.js";
const allPYQsRouter = express.Router();

allPYQsRouter.get("/", fetchAllPYQs);

export default allPYQsRouter;
