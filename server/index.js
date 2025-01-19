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

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:3000' }));
// CORS - Cross Origin Resource Sharing

app.get("/", (req, res) => {
  return res.status(200).send("home page GET route hit");
});

import booksRouter from "./routes/booksRouter.js";
import notesRouter from "./routes/notesRouter.js";
import PYQsRouter from "./routes/PYQsRouter.js";

app.use("/books", booksRouter);
app.use("/notes", notesRouter);
app.use("/pyqs", PYQsRouter);

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
      console.error("MONGODB connection FAILED ");
      console.error(error.message);
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
