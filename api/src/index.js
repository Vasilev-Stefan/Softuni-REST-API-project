import express from 'express';
import cors from 'cors';
import { furniteController } from './controllers/furnitureController.js';

const app = express();

app.use(cors());

app.use('/data', furniteController)

app.listen(3030, () => {
    console.log('Server is listening on http://localhost:3030...')
});

