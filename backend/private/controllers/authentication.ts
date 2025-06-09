import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User, { IUser, UserRole, UserGroup } from '../models/User'; // adjust the import path as needed
// import { createUser } from './userServices';
import allowedEmail from '../models/Email';
import { addEmail } from './adminServices';

export const checkAllowedEmail = async (req: Request, res: Response): Promise<void> => {
    try {
        const { password, passwordConfirm, email } = req.body;
        const isAllowed = await allowedEmail.findOne({ email });
        console.log(await allowedEmail.find());
        console.log(email);
        console.log(password);
        console.log(isAllowed);

        // Check if passwords match
        if (password !== passwordConfirm) {
            res.status(400).json({ message: 'Passwords do not match' });
            return;
        }

        if (isAllowed) {
            res.status(200).json({ success: true, message: 'email is allowed' });
            return;
        }

        res.status(400).json({ success: false, message: 'email not allowed' });
        return;
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const registerUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { password, email, nickname, phone, group, role } = req.body;

        // Check for missing fields
        if (!email || !nickname || !group || !role) {
            res.status(400).json({ message: 'Please fill out all required fields' });
            return;
        }

        // Check for existing user
        const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
        if (existingUser) {
            res.status(400).json({ message: 'Email, username, or phone already in use' });
            return;
        }

        // Create new user
        const newUser = new User({
            password,
            email,
            nickname,
            phone,
            group,
            role,
        });

        await newUser.save();

        res.status(201).json({ message: 'Account created successfully' });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// LOGIN
export const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ success: false, message: 'Please fill out all fields' });
            return;
        }

        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ success: false, message: 'User not found' });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password); // Call method
        if (!isMatch) {
            res.status(400).json({ success: false, message: 'Incorrect password' });
            return;
        }

        // You can generate a JWT token here for auth (optional)
        res.status(200).json({
            success: true,
            message: 'Login successful',
            user: { id: user._id, role: user.role }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const submitAllowedEmail = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email } = req.body;
        if (!email) {
            res.status(400).json({ success: false, message: 'add an email' });

        }

        const newEmail = new allowedEmail({
            email
        });
        // await addEmail(newEmail);
        await newEmail.save();

        res.status(200).json({ success: true, message: 'email added' });
        return;
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};