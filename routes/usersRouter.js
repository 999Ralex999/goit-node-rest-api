import express from 'express';
import User from '../db/models/User.js';

const usersRouter = express.Router();

usersRouter.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
});

export default usersRouter;
