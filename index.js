import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import leaderboardRoutes from './routes/leaderboard.js';
import questionRoutes from './routes/question.js';
import userRoutes from './routes/user.js';
import quizRoutes from './routes/quiz.js';
import { authorize } from './middleware/authorized.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

app.use('/user', userRoutes);
app.use('/leaderboard', authorize, leaderboardRoutes);
app.use('/question', authorize, questionRoutes);
app.use('/quiz', authorize, quizRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
