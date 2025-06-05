const express = require('express');
const cors = require('cors');
const path = require('path');
const publicRoute = require('./public/publicRoute');
const privateRoute = require('./private/privateRoute');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', publicRoute);
app.use('/', privateRoute)

app.listen(1414, () => {
    console.log('Server is running on port 1414');
});