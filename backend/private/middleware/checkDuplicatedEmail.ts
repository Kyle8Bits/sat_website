import { Request, Response, NextFunction } from "express";
import allowedEmail from '../models/Email';

export const checkDuplicatedEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email } = req.body;
        const found = await allowedEmail.findOne({ email });
        if (found) {
            res.status(400).json({ success: true, message: "email already exists" });
            return;
        }
        next();
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};