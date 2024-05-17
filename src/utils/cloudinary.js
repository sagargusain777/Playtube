import {v2 as cloudinary} from "cloudinary"
import fs from "fs";

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});
const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePath) return null;
        //Upload file in cloudinary
        const response  = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        //File uploaded successfully
        console.log("File uploaded successfully in Cloudinary",response.url);
        return response;


        
    } catch (error) {
        //Remove the locally saved temporary file as th upload operation got failed
        fs.unlinkSync(localFilePath);
        return null;

}
}
export {uploadOnCloudinary};