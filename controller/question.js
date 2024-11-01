import Question from '../model/question.js';
import { body, validationResult } from 'express-validator'; // Import express-validator

class QuestionController {
    constructor() {
        this.createQuestion = this.createQuestion.bind(this); // Bind the method to the class instance
    }

    // Method to create a question
    async createQuestion(req, res) {
        // Validate the request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() }); // Return validation errors
        }

        const { question, correctAns, quizId } = req.body; // Extract question, answer, and quizId from the request body
        // Validate the mathematical equation
        const isValid = this.validateEquation(question, correctAns);
        if (!isValid) {
            return res.status(400).json({ error: 'Invalid answer for the given question.' });
        }

        const newQuestion = await Question.create({ question, correctAns, quizId }); // Include quizId when creating the question
        res.status(201).json({ question: newQuestion });
    }

    // Method to validate the mathematical equation
    validateEquation(question, answer) {
        try {
            const evaluatedResult = eval(question); // Evaluate the mathematical expression
            return evaluatedResult === Number(answer); // Compare with the incoming answer
        } catch (error) {
            return false; // Return false if there's an error in evaluation
        }
    }

    // Method to get all questions
    async getAllQuestions(req, res) {
        const questions = await Question.find();
        res.status(200).json({ questions: questions });
    }
}

// Validation middleware for creating a question
export const validateCreateQuestion = [
    body('question').isString().withMessage('Question must be a string.'),
    body('answer').isNumeric().withMessage('Answer must be a number.'),
];

// Export the controller
export default new QuestionController();
