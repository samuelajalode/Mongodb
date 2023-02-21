import express from 'express';
import logger from 'morgan';
import todoRouter from './routes/todoRoutes';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
mongoose.connect(process.env.DATABASE_URL!,()=>{
    console.log('Connected to database');
})

mongoose.connect("")

app.use(express.json());
app.use(logger('dev'));
app.use('/todos', todoRouter);

const Port = 4000;

app.listen(Port, () => {
    console.log(`Server running at httt://localhost:${Port}`);
})