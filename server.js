require('dotenv').config({ path: "./config.env"})
const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');
const errorHandler = require('./middlewar/error')

connectDB();

const app = express();

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));

app.use(errorHandler);

const port = process.env.PORT || 5000

app.listen(port, () => (
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold)
))







