import express from 'express';
import { checkAllowedEmail, loginUser, registerUser, submitAllowedEmail } from './controllers/authentication';
import { getAllEvent } from './controllers/eventServices';
import { checkDuplicatedEmail, checkUsedEmail } from './middleware/checkDuplicatedEmail';
import { authenticateToken } from './middleware/authenticateToken';
import { isStaff } from './middleware/rolePermission';

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

router.get('/dashboard', authenticateToken);
router.get('/get_event', getAllEvent)

router.post('/login', loginUser);
router.post('/register', checkUsedEmail, registerUser);
router.post('/checkemail', checkAllowedEmail);

router.post('/submit-email', authenticateToken, isStaff, checkDuplicatedEmail, submitAllowedEmail); // admin

export default router;