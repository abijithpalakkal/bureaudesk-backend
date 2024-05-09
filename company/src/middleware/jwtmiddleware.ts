import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


interface AuthenticatedRequest extends Request {
    user?: { [key: string]: any };
}

function jwtMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Missing token' });
    }
    try {
        const decoded = jwt.verify(token, 'your_secret_key') as { [key: string]: any };
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
}

export default jwtMiddleware;
