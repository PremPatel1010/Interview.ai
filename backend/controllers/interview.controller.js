import Question from "../models/Question.model.js";
import { generateFeedback, generateQuestions } from "../services/ai.service.js";

export const startInterview = async (req, res) => {
  try {
    const { userId, resumeText } = req.body;

    const questions = await generateQuestions(resumeText);

    const questionDocs = await Question.insertMany(
      questions.map((q) => ({ userId, question: q }))
    );

    console.log(questionDocs)

    res.status(200).json({
      sessionId: questionDocs[0]._id,
      question: questionDocs[0].question,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Failed to start interview." });
  }
};

export const getNextQuestion = async (req, res) => {
  try {
    const { sessionId } = req.params;

    const nextQuestion = await Question.findOne({
      _id: { $gt: sessionId },
      answered: { $ne: true },
    }).sort({ _id: 1 });

    if (!nextQuestion) {
      return res
        .status(200)
        .json({ end: true, message: "Interview completed" });
    }

    res
      .status(200)
      .json({ question: nextQuestion.question, questionId: nextQuestion._id });
  } catch (error) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch the next question" });
  }
};

export const submitAnswer = async (req, res) => {
  try {
    const { questionId, answer } = req.body;

    const feedback = await generateFeedback(answer);

    // Mark the question as answered and store the answer and feedback
    await Question.findByIdAndUpdate(questionId, {
      answered: true,
      userAnswer: answer,
      feedback,
    });

    res.status(200).json({ feedback });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to submit answer" });
  }
};

export const endInterview = async (req, res) => {
  try {
    const { sessionId } = req.params;

    const completedQuestions = await Question.find({
      _id: { $lte: sessionId },
      answered: true,
    });

    const summary = completedQuestions.map((q) => ({
      question: q.question,
      answer: q.userAnswer,
      feedback: q.feedback,
    }));

    res.status(200).json({ summary, message: "Interview ended successfully" });
  } catch (error) {
    console.log(err);
    res.status(500).json({ error: "Failed to end interview" });
  }
};
