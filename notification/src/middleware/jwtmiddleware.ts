import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthenticatedRequest extends Request {
    user?: { [key: string]: any };
}

function jwtMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const token = req.cookies.auth;
    if (!token) {
       res.json({errorResponse:{message: 'session Expired.Please logout'} });
    }
    try {
        const decoded = jwt.verify(token, '123456789ab') as { [key: string]: any };
        next();
    } catch (error) {
        res.json({errorResponse:{message: 'session Expired.Please logout'} });
    }
}

export default jwtMiddleware;
