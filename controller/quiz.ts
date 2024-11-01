import { body, validationResult } from 'express-validator';
import QuizModel from '../model/quiz'; // Adjust the import based on your project structure

export const createQuiz = [
    body('name').isString().notEmpty().withMessage('Quiz name is required'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name } = req.body;

        try {
            const newQuiz = new QuizModel({ name });
            await newQuiz.save();
            res.status(201).json({ message: 'Quiz created successfully', quiz: newQuiz });
        } catch (error) {
            res.status(500).json({ message: 'Error creating quiz', error });
        }
    }
];


//get all quizzes
export const getAllQuizzes = async (req, res) => {
    const quizzes = await QuizModel.find();
    res.status(200).json({ quizzes });
};