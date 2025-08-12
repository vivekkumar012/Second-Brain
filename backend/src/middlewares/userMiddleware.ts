import type { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export const userMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const header = req.headers["authorization"];
        const decode = jwt.verify(header as string, process.env.JWT_SECRET as string);
        if(!decode) {
            return res.status(400).json({
                message: "Unauthorized access denied",
                success: false
            })
        }
        // @ts-ignore
        req.userId = decode.id;
        next()
    } catch (error) {
        res.status(500).json({
            message: "error in middleware"
        })
    }
}