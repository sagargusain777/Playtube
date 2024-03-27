import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import app from "./app.js";
import connectDB from "./db/db.js";

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    app.on("error", (error) => {
      console.error(
        `Mongo Db connection Failed at PORT LEVEL: ${error.message}`
      );
      throw error;
    });
  })
  .catch((error) => {
    console.error(`Mongo Db connection Failed : ${error.message}`);
    process.exit(1);
  });
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
