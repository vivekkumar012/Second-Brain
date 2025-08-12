import express from 'express'
import userRouter from './routes/user.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/v1", userRouter);

try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("MongoDB is Connected");
} catch (error) {
    console.log(error, "Error in MongoDB");
}

app.listen(3000, () => {
    console.log(`App is Listening on port${3000}`);
})