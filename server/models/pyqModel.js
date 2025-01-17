import mongoose from "mongoose";

const pyqSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    courseTitle: {
      type: String,
      required: true,
    },
    courseCode: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const PYQs = mongoose.model('PYQs', pyqSchema);
