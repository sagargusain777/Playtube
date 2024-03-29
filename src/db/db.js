

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB = async ()=>{
           //connection with the database
    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`);
        console.log(`\n MONGODB connected : ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.error(`MONGODB connection failed : ${error.message}`);
        process.exit(1);    
    }
}
export default connectDB;