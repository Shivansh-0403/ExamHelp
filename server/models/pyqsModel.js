import mongoose from "mongoose";

const pyqsSchema = mongoose.Schema(
  {
    courseTitle: {
      type: String,
      required: true,
    },
    courseCode: {
      type: String,
      required: true,
    },
    facultyName: {
      type: String,
      required: true,
    },
    term: {
      type: String,
      required: true,
    },
    academicYear: {
      type: Number,
      required: true,
    },
    link: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const PYQs = mongoose.model('PYQs', pyqsSchema);