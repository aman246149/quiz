
import mongoose, { Document, Schema } from 'mongoose';

// Define the Quiz interface
export interface Quiz extends Document {
    name: string;
}

// Create the Quiz schema
const quizSchema: Schema = new Schema({
    name: { type: String, required: true },
});

// Create the Quiz model
const QuizModel = mongoose.model<Quiz>('Quiz', quizSchema);

export default QuizModel;