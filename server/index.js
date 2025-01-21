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
import pyqsRouter from "./routes/pyqsRouter.js";

app.use("/books", booksRouter);
app.use("/notes", notesRouter);
app.use("/pyqs", pyqsRouter);

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
    console.log("mongo_uri",process.env.MONGO_DB_URI);
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



// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { mongoose } from "mongoose";
// import { v2 as cloudinary } from "cloudinary";
// import multer from "multer";
// import path from "path";
// import { fileURLToPath } from 'url';  // Import 'fileURLToPath' from 'url' module

// dotenv.config();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// // app.use(cors({ origin: 'http://localhost:3000' }));
// app.use(cors());
// // CORS - Cross Origin Resource Sharing
// app.get("/", (req, res) => {
//   return res.status(200).send("home page GET route hit");
// });

// // Configure Multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './uploads'); // Directory where files will be stored
//   },
//   filename: (req, file, cb) => {
//     const uniqueName = `${Date.now()}-${file.originalname}`;
//     cb(null, uniqueName); // Create a unique file name
//   },
// });

// const upload = multer({
//   storage,
//   fileFilter: (req, file, cb) => {
//     const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
//     if (allowedTypes.includes(file.mimetype)) {
//       cb(null, true);
//     } else {
//       cb(new Error('Only .pdf or .docx files are allowed!'));
//     }
//   },
// });

// // Route to handle file upload
// app.post('/upload-notes', upload.single('file'), (req, res) => {
//   const { title, courseCode } = req.body;

//   if (!req.file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   // You can integrate Cloudinary or simply store the file path in MongoDB
//   // If you want to use Cloudinary for file uploads, uncomment below code
//   /*
//   cloudinary.uploader.upload(req.file.path, (error, result) => {
//     if (error) {
//       return res.status(500).json({ message: 'File upload failed', error });
//     }
//     // Save to database (optional)
//     res.status(200).json({
//       message: 'File uploaded successfully',
//       fileUrl: result.secure_url,  // Cloudinary URL
//       title,
//       courseCode,
//     });
//   });
//   */

//   // For storing file locally in the server:
//   res.status(200).json({
//     message: 'File uploaded successfully',
//     filePath: `/uploads/${req.file.filename}`,
//     title,
//     courseCode,
//   });
// });

// // Serve uploaded files
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);  // Get the directory name from the filename
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Import Routes
// import booksRouter from "./routes/booksRouter.js";
// import notesRouter from "./routes/notesRouter.js";
// import PYQsRouter from "./routes/PYQsRouter.js";

// // Use Routes
// app.use("/books", booksRouter);
// app.use("/notes", notesRouter);
// app.use("/pyqs", PYQsRouter);

// // Database connection
// const connectDB = async () => {
//   try {
//     const connectionInstance = await mongoose.connect('mongodb://127.0.0.1:27017/test');
//     console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     console.log("MONGODB Connected...");
//   } catch (error) {
//     console.error("MONGODB connection FAILED ");
//     console.error(error.message);
//     process.exit(1);
//   }
// };

// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT || 3000, () => {
//       console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("MONGO db connection failed !!! ", err);
//   });
