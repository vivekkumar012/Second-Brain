import express from 'express'
import userRouter from './routes/user.js';

const app = express();

app.use(express.json());

app.use("/api/v1", userRouter);


app.listen(3000, () => {
    console.log(`App is Listening on port${3000}`);
})