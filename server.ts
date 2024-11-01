import express from 'express';
import dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';
import leaderboardRoutes from './routes/leaderboard';
import questionRoutes from './routes/question';
import userRoutes from './routes/user';
import quizRoutes from './routes/quiz';
import { authorize } from './middleware/authorized';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
mongoose.connect(process.env.MONGO_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as ConnectOptions).then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

app.use('/user', userRoutes);
app.use('/leaderboard', authorize, leaderboardRoutes);
app.use('/question', authorize, questionRoutes);
app.use('/quiz', authorize, quizRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
