import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.MONGODB_URI

function connect() {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Successfully connected to MongoDB.");
    })
    .catch((err) => {
      console.error("Connection error", err);
    });
}

export default connect;
