
import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the Question document
interface IQuestion extends Document {
    question: string;
    correctAns: string;
    quizId: string;
}

// Create the Question schema
const questionSchema: Schema = new Schema({
    question: { type: String, required: true },
    correctAns: { type: String, required: true },
    quizId: { type: String, required: true }
});

// Create the Question model
const Question = mongoose.model<IQuestion>('Question', questionSchema);

export default Question; 