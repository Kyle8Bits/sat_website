import { Request, Response, NextFunction } from "express";
import allowedEmail from '../models/Email';
import User from "../models/User";

export const checkDuplicatedEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email } = req.body;
        const emailHasPermission = await allowedEmail.findOne({ email }); // For admin

        if (emailHasPermission) {
            res.status(400).json({ success: false, message: "email already has permission" });
            return;
        }

        next();
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

export const checkUsedEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email } = req.body;
        const emailAlreadyExists = await User.findOne({ email }); // For user

        if (emailAlreadyExists) {
            res.status(400).json({ success: false, message: "email already exists" });
            return;
        }

        next();
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};
