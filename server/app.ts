import express from 'express';
import cors from 'cors';
import path from 'path';
import publicRoute from './public/publicRoute';
import privateRoute from './private/privateRoute';
import { Request, Response, NextFunction } from 'express';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', publicRoute);
app.use('/', privateRoute);

app.listen(1414, () => {
    console.log('Server is running on port 1414');
});