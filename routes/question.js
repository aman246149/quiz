import express from 'express';
import QuestionController from '../controller/question.js';

const router = express.Router();

// Example route using the Question model
router.get('/getQuestions', QuestionController.getAllQuestions);
router.post('/createQuestion', QuestionController.createQuestion);
export default router;