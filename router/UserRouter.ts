import express from 'express';
import {User} from "../model/User";


const router = express.Router();

// Create a new user
router.post('/register', async (req, res) => {
    try {
        const { name, password, email } = req.body;
        const newUser = new User({ name, password, email });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
});

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
});

export default router;
