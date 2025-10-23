import express from 'express';
import cors from 'cors';
import { furniteController } from './controllers/furnitureController.js';
import { userController } from './controllers/userController.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/data', furniteController);

app.use('/users', userController);

app.listen(3030, () => {
    console.log('Server is listening on http://localhost:3030...')
});

