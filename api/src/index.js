import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { furniteController } from './controllers/furnitureController.js';
import { userController } from './controllers/userController.js';
import { authMiddleWare } from './middlewares/authMiddleware.js';

const app = express();

app.use(cors());
app.use(express.json());

//Middlewares
app.use(authMiddleWare)

try {
    mongoose.connect('mongodb+srv://sbasilev_db_user:YQMbrqce7VzWmjAR@movies.owquz7p.mongodb.net/')
    console.log('Sucesfully connected to DB!')
} catch (error) {
    console.log('Failed to connect to DB!')
}

app.use('/data', furniteController);

app.use('/users', userController);

app.listen(3030, () => {
    console.log('Server is listening on http://localhost:3030...')
});

