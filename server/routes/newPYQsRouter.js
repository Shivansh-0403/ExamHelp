import express from "express";
import { upload } from "../middlewares/multer.js";
import { createPyq } from "../controllers/pyqController.js";

const newPYQsRouter = express.Router();

newPYQsRouter.post("/upload", upload.single("file"), createPyq);

export default newPYQsRouter;

// Router - url check, 
// controller consists of functions that are executed on hitting these routes