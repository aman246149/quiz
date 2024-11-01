import mongoose from 'mongoose';

// First define the schema
const questionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    correctAns: { type: String, required: true },
    quizId: { type: String, required: true }
});

// Then create the model
const QuestionModel = mongoose.model('Question', questionSchema);

export default QuestionModel; 
    