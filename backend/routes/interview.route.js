import express from 'express';
import { endInterview, getNextQuestion, startInterview, submitAnswer } from '../controllers/interview.controller.js';
import { authUser } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/start', authUser,startInterview);
router.get('/next-question/:sessionId', authUser, getNextQuestion);
router.post('/submit-answer', authUser,submitAnswer);
router.post('/end/:sessionId', authUser,endInterview);

export default router;