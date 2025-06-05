import express from 'express';
import { loginUser, registerUser } from './controllers/authentication';

const router = express.Router();

router.get('/user', (req, res) => {
    try {
        res.status(200).json({
            message: 'User Kyle'
        });
    }
    catch (error) {
        console.error('Error in public route:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/login', loginUser);
router.post('/register', registerUser);

export default router;