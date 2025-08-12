import { userModel } from "../models/db.js";
import { z } from 'zod';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const signup = async (req: any, res: any) => {
    try {
        const { username, password} = req.body;
        if(!username || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            })
        }
        // Zod Validation
        const userSchema = z.object({
            username: z.string().min(5, {message: "Username must be greater than 5 char long"}),
            password: z.string().min(5, {message: "Password must be greater than 5 char long"})
        })
        const validateSchema = userSchema.safeParse(req.body);
        if(!validateSchema.success) {
            return res.status(400).json({
                message: "Validation Error",
                success: false
            })
        }

        const user = await userModel.findOne({
            username: username
        })
        if(user) {
            return res.status(403).json({
                message: "User already exist",
                success: false
            })
        }
        const hashPass = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({
            username,
            password: hashPass
        });
        return res.status(200).json({
            message: "User signedup successfully",
            success: true,
            newUser
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error in Signup"
        })
    }
}

export const login = async (req: any, res: any) => {
    try {
        const {username, password} = req.body;
        if(!username || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            })
        }
        const user = await userModel.findOne({
            username: username
        })
        if(!user) {
            return res.status(411).json({
                message: "User not exist",
                success: false
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(402).json({
                message: "Password is not matched",
                success: false
            })
        }
        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET as string);

        return res.status(200).json({
            message: "user successfully signedin",
            token
        })

    } catch (error) {
        res.status(500).json({
            message: "Error in user Login",
            error: error
        })
    }
}
