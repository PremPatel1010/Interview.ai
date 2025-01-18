import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  question: String,
  userAnswer: String,
  feedback: String,
  answered: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});


const Question = mongoose.model('Question', QuestionSchema);

export default Question;