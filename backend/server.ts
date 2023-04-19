import express, { Express, Request, Response } from 'express';
const colors = require('colors');
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorMiddleware';
import axios from 'axios';
import { ddmmyyyy } from './constants/dateConstants';

dotenv.config();

import { connectDB } from './config/db';
import { config } from './constants/apiConstants';

connectDB();
const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/trackers', require('./routes/trackerRoutes'));
// app.use('/api/priceHistory', require('./routes/priceHistoryRoutes'));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});



