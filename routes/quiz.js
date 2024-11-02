
import express from 'express';
import { createQuiz, getAllQuizzes, getAllQuizQuestions } from '../controller/quiz.js';

const router = express.Router();

router.post('/createQuiz', createQuiz);
router.get('/getAllQuizzes', getAllQuizzes);
router.get('/getAllQuizQuestions/:quizId', getAllQuizQuestions);

export default router;