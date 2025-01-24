import Question from "../models/Question.model.js";
import Resume from "../models/resume.model.js";
import { generateFeedback, generateQuestions } from "../services/ai.service.js";

export const startInterview = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    const resumeText = await Resume.findOne({ userId }).sort({ createdAt: -1 });
    if (!resumeText) {
      return res.status(404).json({ error: "No resume found for the user." });
    }

    const questions = await generateQuestions(resumeText);
    if (!questions || questions.length === 0) {
      return res.status(500).json({ error: "No questions could be generated." });
    }

    const questionDocs = await Question.insertMany(
      questions.map((q) => ({ userId, question: q }))
    );

    res.status(200).json({
      sessionId: questionDocs[0]._id,
      question: questionDocs[0].question,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to start interview." });
  }
};

export const getNextQuestion = async (req, res) => {
  try {
    const { sessionId } = req.params;

    if (!sessionId) {
      return res.status(400).json({ error: "Session ID is missing." });
    }

    const nextQuestion = await Question.findOne({
      _id: { $gt: sessionId },
      answered: { $ne: true },
    }).sort({ _id: 1 });

    if (!nextQuestion) {
      return res.status(200).json({ end: true, message: "Interview completed" });
    }

    res.status(200).json({
      question: nextQuestion.question,
      questionId: nextQuestion._id,
      sessionId: nextQuestion._id, // Send back sessionId with the question.
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch the next question" });
  }
};

export const submitAnswer = async (req, res) => {
  try {
    const {sessionId} = req.params;
    const { answer } = req.body;

    if (!sessionId || !answer) {
      return res.status(400).json({ error: "Session ID or answer is missing." });
    }

    const question = await Question.findOne({ _id: sessionId, answered: { $ne: true } });
    if (!question) {
      return res.status(404).json({ error: "Question not found or already answered." });
    }

    const feedback = await generateFeedback(answer);

    // Mark the question as answered and store the answer and feedback
    await Question.findByIdAndUpdate(sessionId, {
      answered: true,
      userAnswer: answer,
      feedback,
    });

    res.status(200).json({ feedback });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to submit answer" });
  }
};

export const endInterview = async (req, res) => {
  try {
    const { sessionId } = req.params;

    if (!sessionId) {
      return res.status(400).json({ error: "Session ID is missing." });
    }

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
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to end interview" });
  }
};
