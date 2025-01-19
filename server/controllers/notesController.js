import { Notes } from "../models/notesModel.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const createNotes = async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.file);
        
        // Destructuring
        const { contributor, courseTitle, courseCode, facultyName, academicYear } = req.body

        if (!contributor || !courseTitle || !courseCode || !facultyName || !academicYear ) {
            return res.status(400).send({ message: "one or more fields missing!" });
        }

        // Upload the new notes file to Cloudinary
        const file = req.file;
        console.log(file);
        const fileUpload = await uploadOnCloudinary(file.path);
        const url = fileUpload.url;

        console.log(url);

        const newNotes = {
            contributor: contributor,
            courseTitle: courseTitle,
            courseCode: courseCode,
            facultyName: facultyName,
            academicYear: academicYear,
            link: url,
        };

        const notes = await Notes.create(newNotes);
        console.log(notes);
        return res.status(201).send(notes);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

const fetchAllNotes = async (req, res) => {
  try {
    const allNotes = await Notes.find();
    console.log("Notes fetched..");
    return res.status(200).json(allNotes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

export { createNotes, fetchAllNotes }
