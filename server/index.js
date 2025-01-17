import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// import { Book } from "./models/bookModel.js";
import { mongoose } from "mongoose";
import newBookRouter from "./routes/newBookRouter.js";
import newNotesRouter from "./routes/newNotesRouter.js";
import newPYQsRouter from "./routes/newPYQsRouter.js";
import allNotesRouter from "./routes/allNotesRouter.js";
import allBooksRouter from "./routes/allBooksRouter.js";
import allPYQsRouter from "./routes/allPYQsRouter.js";
// import newBookRouter from "./routes/newBookRouter.js";
// import searchBooksRouter from "./routes/searchBooksRouter.js";
// import updateBookRouter from "./routes/updateBookRouter.js";
// import deleteBookRouter from "./routes/deleteBookRouter.js";
// import fileUploadRouter from "./routes/FileUploadRouter.js";
dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));

app.get("/", (req, res) => {
  return res.status(200).send("home page GET route hit");
});
app.use("/books", newBookRouter);
app.use("/books", allBooksRouter);
app.use("/notes", newNotesRouter);
app.use("/notes", allNotesRouter);
app.use("/pyqs", newPYQsRouter);
app.use("/pyqs", allPYQsRouter);

// app.use("/books", searchBooksRouter);
// app.use("/books", updateBookRouter);
// app.use("/books", deleteBookRouter);
// app.use("/upload", fileUploadRouter);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => {
      console.log("server running on port: ", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
    console.log("error connecting to db");
  });