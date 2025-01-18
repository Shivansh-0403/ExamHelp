import mongoose from "mongoose";

const mongoUri = "mongodb+srv://prishitosh:stra12340M@cluster0.hpxpm.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Connected to MongoDB Atlas successfully!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
