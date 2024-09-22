import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstant = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(`\n MongoDB connected !! DB HOS: 
        ${connectionInstant.connection.host}`);
  } catch (error) {
    console.error("MONGO DB connection error", error);
    process.exit(1);
  }
};
export default connectDB;
