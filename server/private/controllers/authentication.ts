import express from 'express';
import { Request, Response } from 'express';

// Test
const dataBase = {
    email: "Test",
    password: "123"
}

const sampleUser = {
    email: "SAT",
    password: "admin123"
}

const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!(email) || !(password)) {
            res.status(400).json({
                message: 'Please fill out all fields'
            });
            return;
        }

        if (email === sampleUser.email && password === sampleUser.password) {
            res.status(200).json({
                message: 'Welcome admin'
            });
            return;
        }

        if (!(email === sampleUser.email)) {
            res.status(400).json({
                message: 'User not found!'
            });
            return;
        }

        if (!(password === sampleUser.password)) {
            res.status(400).json({
                message: 'Incorrect password'
            });
            return;
        }

        res.status(200).json({
            message: 'Login successful'
        });
        return;

    } catch (error) {
        // console.error('Error in public route:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;

    }
}

const registerUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password, passwordConfirm } = req.body;

        if (!(email) || !(password) || !(passwordConfirm)) {
            res.status(400).json({
                message: 'Please fill out all fields'
            });
            return;
        }

        if (password !== passwordConfirm) {
            res.status(400).json({
                message: 'Passwords are different'
            });
            return;
        }

        if (email === sampleUser.email) {
            res.status(400).json({
                message: 'Email already used'
            });
            return;
        }

        res.status(200).json({
            message: 'Account created'
        });
        return;

    } catch (error) {
        // console.error('Error in public route:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;

    }
}

export { loginUser, registerUser };


