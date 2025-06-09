import express from 'express';
import cors from 'cors';
import path from 'path';

import connectDB from './config/database';

import publicRoute from './public/publicRoute';
import privateRoute from './private/privateRoute';
import handleJsonError from './private/middleware/errorHandler';
// import { Request, Response, NextFunction } from 'express';

const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(handleJsonError);

connectDB();

app.use('/', publicRoute);
app.use('/', privateRoute);


app.listen(1414, () => {
    console.log('Server is running on port 1414');
});