import express from 'express';
import { login, signup } from '../controllers/userController.js';
import { createContent, deleteContent, getContent, linkShare, linkShareId } from '../controllers/contentController.js';
import { userMiddleware } from '../middlewares/userMiddleware.js';

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/content", userMiddleware, createContent);
userRouter.get("/content", userMiddleware, getContent);
userRouter.delete("/content", userMiddleware, deleteContent);
userRouter.post("/brain/share", userMiddleware, linkShare);
userRouter.get("/brain/:shareLink", linkShareId);

export default userRouter; 