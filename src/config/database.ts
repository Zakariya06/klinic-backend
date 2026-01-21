import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

function connectDatabse() {
  const dbUrl = process.env.DB_URL; 

  if (!dbUrl) {
    console.error("DB_URL is missing in .env");
    return;
  }

  mongoose
    .connect(dbUrl)
    .then(() => console.log("Connected successfully to MongoDB Atlas"))
    .catch((err) => console.error("MongoDB connection error:", err));
}

export { connectDatabse };
