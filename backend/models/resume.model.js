import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  filePath: String,
  parsedData: Object, // Store the parsed text or structured data
  createdAt: { type: Date, default: Date.now },
});

const Resume = mongoose.model('Resume', ResumeSchema);
export default Resume;