import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { mongoose } from "mongoose";
import { v2 as cloudinary } from "cloudinary"

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:3000' }));

app.get("/", (req, res) => {
  return res.status(200).send("home page GET route hit");
});

import newBookRouter from "./routes/newBooksRouter.js";
import newNotesRouter from "./routes/newNotesRouter.js";
import newPYQsRouter from "./routes/newPYQsRouter.js";
import allNotesRouter from "./routes/allNotesRouter.js";
import allBooksRouter from "./routes/allBooksRouter.js";
import allPYQsRouter from "./routes/allPYQsRouter.js";

app.use("/books", newBookRouter);
app.use("/books", allBooksRouter);
app.use("/notes", newNotesRouter);
app.use("/notes", allNotesRouter);
app.use("/pyqs", newPYQsRouter);
app.use("/pyqs", allPYQsRouter);

// mongoose
//   .connect(process.env.MONGODB_URL)
//   .then(() => {
//     console.log("connected to database");
//     app.listen(PORT, () => {
//       console.log("server running on port: ", PORT);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log("error connecting to db");
//   });

const connectDB = async () => {
  try {
      // const connectionInstance = await mongoose.connect('mongodb://127.0.0.1:27017/test');
      const connectionInstance = await mongoose.connect(process.env.MONGO_DB_URI);
      console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
      console.log("MONGODB Connected...");
  } catch (error) {
      console.error("MONGODB connection FAILED ", error.message);
      process.exit(1);
  }
};

connectDB()
  .then(() => {
      app.listen(process.env.PORT || 3000, () => {
          console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
      });
  })
  .catch((err) => {
      console.error("MONGO db connection failed !!! ", err);
  });

// NEXT TASK
// get wale functions ko controllers mein add kar dena
// ->  all, new - merge. books, pyq, notes -> route
// book.route.js
// BookRouter.post("//", func_name)
// BookRouter.get("//", func_name)
// next week frontend