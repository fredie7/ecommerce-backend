require('dotenv').config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import morgan from 'morgan';
import authRoute from './routers/auth';
import productRoute from './routers/product';
import db from './db';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/uploads", express.static("uploads"));
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(expressValidator());
app.use(cors());

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/product', productRoute);

const port  = process.env.PORT || 5002;
app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
});