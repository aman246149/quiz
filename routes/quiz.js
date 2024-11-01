
import express from 'express';
import { createQuiz, getAllQuizzes } from '../controller/quiz.js';

const router = express.Router();

router.post('/createQuiz', createQuiz);
router.get('/getAllQuizzes', getAllQuizzes);

export default router;