import express from 'express';
import { checkAllowedEmail, loginUser, registerUser, submitAllowedEmail, authenticateToken } from './controllers/authentication';
import { checkDuplicatedEmail, checkUsedEmail } from './middleware/checkDuplicatedEmail';

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

router.get('/dashboard', authenticateToken, (req, res) => {
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
router.post('/register', checkUsedEmail, registerUser);
router.post('/checkemail', checkAllowedEmail);

router.post('/submit-email', authenticateToken, checkDuplicatedEmail, submitAllowedEmail); // admin

export default router;