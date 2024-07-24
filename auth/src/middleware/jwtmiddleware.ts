import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

interface AuthenticatedRequest extends Request {
    user?: { [key: string]: any };
}

function jwtMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const token = req.cookies.auth;
    if (!token) {
       res.json({errorResponse:{message: 'session Expired.Please logout'} });
    }
    try {
        if(process.env.SECRET_KEY){
            var decoded = jwt.verify(token, process.env.SECRET_KEY) as { [key: string]: any };
        }
        next();
    } catch (error) {
        res.json({errorResponse:{message: 'session Expired.Please logout'} });
    }
}

export default jwtMiddleware;
