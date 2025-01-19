import express from "express";
import { upload } from "../middlewares/multer.js";
import { createPYQs, fetchAllPYQs } from "../controllers/pyqsController.js";

const PYQsRouter = express.Router();

PYQsRouter.post("/upload", upload.single("file"), createPYQs);
PYQsRouter.get("/",fetchAllPYQs);

export default PYQsRouter;

// Router - url check, 
// controller consists of functions that are executed on hitting these routes
