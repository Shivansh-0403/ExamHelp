import { PYQs } from "../models/pyqsModel.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const createPYQs = async (req, res) => {
  try {
    // console.log(req.body);
    // console.log(req.file);

    // Form fill pysq
    // Db store - Post route
    // url - /pyq/upload
    // middleware???? - multer (local file upload/storage)

    // Algorithm
    // destructure according to model
    // check for null values
    // file upload to cloud
    // get the url
    // create an ibject according to model shcema
    // saVE

    // Destructuring
    const { courseTitle, courseCode, facultyName, term, academicYear } =
      req.body;

    if (!courseTitle || !courseCode || !facultyName || !term || !academicYear) {
      return res.status(400).send({ message: "one or more fields missing!" });
    }

    // Upload the new PYQs file to Cloudinary
    const file = req.file;
    console.log(file);
    const fileUpload = await uploadOnCloudinary(file.path);
    const url = fileUpload.url;

    console.log(url);

    const newPYQs = {
      courseTitle: courseTitle,
      courseCode: courseCode,
      facultyName: facultyName,
      term: term,
      academicYear: academicYear,
      link: url,
    };

    const pyq = await PYQs.create(newPYQs);
    console.log(pyq);
    return res.status(201).send(pyq);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const fetchAllPYQs = async (req, res) => {
  try {
    const allPYQs = await PYQs.find();
    console.log("PYQs fetched..");
    return res.status(200).send(allPYQs);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

export { createPYQs, fetchAllPYQs };
