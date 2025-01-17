import mongoose from "mongoose";

const notesSchema = mongoose.Schema(
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
export const Notes = mongoose.model('Notes', notesSchema);
