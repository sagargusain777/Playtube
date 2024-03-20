import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/db.js";

dotenv.config({
  path: "./.env",
});
const app = express();

connectDB();
/*
//Approach 1 Using ifii function
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`);
    //listeners
    app.on("error", (error) => {
      console.error(`Mongo Db connection Failed : ${error.message}`);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(`Mongo Db connection Failed : ${error.message}`);
    process.exit(1);
  }
})();
*/
