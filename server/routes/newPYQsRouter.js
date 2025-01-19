import express from "express";
import { upload } from "../middlewares/multer.js";
import { createPYQs } from "../controllers/pyqsController.js";

const newPYQsRouter = express.Router();

newPYQsRouter.post("/upload", upload.single("file"), createPYQs);

export default newPYQsRouter;

// Router - url check, 
// controller consists of functions that are executed on hitting these routes