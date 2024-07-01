import express from "express";
import {login, signup} from '../controller/user.controller.js'
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router()

router.post("/signup", signup);
router.post("/login", login);

// Example of a protected route for admins only
router.get('/admin', protect, adminOnly, (req, res) => {
    res.status(200).json({ message: 'Welcome Admin' });
});

// Example of a protected route for all authenticated users
router.get('/', protect, (req, res) => {
    res.status(200).json({ message: 'Welcome to your dashboard' });
});


export default router;