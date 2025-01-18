import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connect from './db/db.js';
import userRoutes from './routes/user.route.js'
import interviewRoutes from './routes/interview.route.js';

const app = express();

connect();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/users', userRoutes);
app.use('/interview', interviewRoutes);

app.get('/', (req,res) => {
  res.send("Hello world!!")
})


export default app;