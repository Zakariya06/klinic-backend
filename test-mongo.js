import "dotenv/config";
import mongoose from "mongoose";

async function connectDb() {
  console.log("DB_URL present?", Boolean(process.env.DB_URL));

  await mongoose.connect(process.env.DB_URL, {
    serverSelectionTimeoutMS: 10000,
  });

  console.log("✅ connected");
  process.exit(0);
}

connectDb().catch((err) => {
  console.error("❌ error", err);
  process.exit(1);
});
