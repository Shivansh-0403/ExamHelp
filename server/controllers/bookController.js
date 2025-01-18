import { Books } from "../models/bookModel.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const createBooks = async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.file);
        
        // Destructuring
        const { title, author, publishYear, subject } = req.body

        if (!title || !author || !publishYear || !subject ) {
            return res.status(400).send({ message: "one or more fields missing!" });
        }

        // Upload the new book file to Cloudinary
        const file = req.file;
        if (!file) {
            return res.status(400).send({ message: "File is required!" });
        }

        // Upload the new notes file to Cloudinary
        console.log(file);
        const fileUpload = await uploadOnCloudinary(file.path);
        const url = fileUpload.url;

        console.log(url);

        const newBooks = {
            title: title,
            author: author,
            publishYear: publishYear,
            subject: subject,
            link: url,
        };

        const books = await Books.create(newBooks);
        console.log(books);
        return res.status(201).send(books);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

export { createBooks }