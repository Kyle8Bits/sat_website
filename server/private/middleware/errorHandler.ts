// controllers/errorHandler.ts
import { Request, Response, NextFunction } from 'express';

function handleJsonError(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) : void {
    if (err instanceof SyntaxError && 'body' in err) {
        res.status(400).json({ message: 'Invalid JSON input' });
    }
    next(err);
}

export default handleJsonError;