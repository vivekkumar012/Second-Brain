import express from 'express';
import { login, signup } from '../controllers/userController.js';
import { createContent, deleteContent, getContent, linkShare, linkShareId } from '../controllers/contentController.js';

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/content", createContent);
userRouter.get("/content", getContent);
userRouter.delete("/content", deleteContent);
userRouter.post("/brain/share", linkShare);
userRouter.get("brain/:shareLink", linkShareId);

export default userRouter; 