import express from 'express';
import { endInterview, getNextQuestion, startInterview, submitAnswer } from '../controllers/interview.controller.js';

const router = express.Router();

router.post('/start', startInterview);
router.get('/next-question/:sessionId', getNextQuestion);
router.post('/submit-answer', submitAnswer);
router.post('/end/:sessionId', endInterview);

export default router;