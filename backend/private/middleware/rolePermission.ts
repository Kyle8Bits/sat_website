import { Request, Response, NextFunction } from 'express';
import { UserRole } from '../models/User';

export const isStaff = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { role } = req.body;

        if ((role !== UserRole.Staff)) {
            res.status(401).json({ status: false, message: "Has no permission" });
            return;
        }
        next();

    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

export const isCoord = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { role } = req.body;

        if (role !== UserRole.Coordinator) {
            res.status(401).json({ status: false, message: "Has no permission" });
            return;
        }
        next();

    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

export const isLeader = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { role } = req.body;

        if (role !== UserRole.Leader) {
            res.status(401).json({ status: false, message: "Has no permission" });
            return;
        }
        next();

    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};