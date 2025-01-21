import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return ""
        
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        
        // file has been uploaded successfully
        // console.log(response)
        console.log("file is uploaded on cloudinary ", response.url);
        
        // helps in deleting the locally saved file after uploading it on cloud
        fs.unlinkSync(localFilePath)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}

export { uploadOnCloudinary }