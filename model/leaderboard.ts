import mongoose, { Document, Schema } from 'mongoose';

// Define the Leaderboard interface
export interface Leaderboard extends Document {
    username: string;
    maxScore: number;
    rank: number;
    quizId: string;
}

// Create the Leaderboard schema
const leaderboardSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    maxScore: { type: Number, required: true },
    rank: { type: Number, required: true },
    quizId: { type: String, required: true }
});

// Create the Leaderboard model
const LeaderboardModel = mongoose.model<Leaderboard>('Leaderboard', leaderboardSchema);

export default LeaderboardModel;
