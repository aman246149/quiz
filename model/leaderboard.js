import mongoose from 'mongoose';

// First define the schema
const leaderboardSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    maxScore: { type: Number, required: true },
    rank: { type: Number, required: true },
    quizId: { type: String, required: true }
});

// Then create the model
const LeaderboardModel = mongoose.model('Leaderboard', leaderboardSchema);

export default LeaderboardModel;
