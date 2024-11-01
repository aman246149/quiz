import LeaderboardModel from '../model/leaderboard.js';
import { body, validationResult } from 'express-validator';

// Get leaderboard
const getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await LeaderboardModel.find().sort({ maxScore: -1 }).exec();
        res.status(200).json(leaderboard);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching leaderboard', error });
    }
};

// Update leaderboard
const updateLeaderboard = [
    body('currentPlayerId').isMongoId().withMessage('Invalid player ID'),
    body('quizId').isMongoId().withMessage('Invalid quiz ID'),
    body('newScore').isInt({ gt: 0 }).withMessage('Score must be a positive integer'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { currentPlayerId, quizId, newScore } = req.body;

        try {
            let player = await LeaderboardModel.findOne({ _id: currentPlayerId, quizId });
            if (!player) {
                player = new LeaderboardModel({ _id: currentPlayerId, quizId, maxScore: newScore });
                await player.save();
                return res.status(201).json({ message: 'Player created and leaderboard updated', player });
            }

            if (newScore > player.maxScore) {
                player.maxScore = newScore;
                await player.save();
                res.status(200).json({ message: 'Leaderboard updated', player });
            } else {
                res.status(200).json({ message: 'Score not updated, new score is not higher', player });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating leaderboard', error });
        }
    }
];

export { getLeaderboard, updateLeaderboard };