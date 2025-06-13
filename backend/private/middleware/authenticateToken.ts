import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';

dotenv.config();

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const secretKey = process.env.ACCESS_TOKEN;

    if (!secretKey) {
        throw new Error("JWT_SECRET is not defined in environment variables");
    }

    const token = req.headers.authorization?.split(' ')[1]; // e.g., "Bearer <token>"

    if (token) {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                res.status(401).send('Invalid token');
                return;
            } else {
                // decoded could be string or JwtPayload
                const payload = decoded as JwtPayload;
                req.body.email = payload.email;
                req.body.role = payload.role;
                next();
            }
        });
    } else {
        res.status(400).send('Token missing');
        return;
    }
};