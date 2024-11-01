import express from 'express';
import { getLeaderboard, updateLeaderboard } from '../controller/leaderboard';

const router = express.Router();

// Route to get the leaderboard
router.get('/getLeaderboard', getLeaderboard);

// Route to update the leaderboard
router.post('/updateLeaderboard', updateLeaderboard);

export default router;
