import mongoose from 'mongoose';

// First define the schema
const quizSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

// Then create the model
const QuizModel = mongoose.model('Quiz', quizSchema);

export default QuizModel;