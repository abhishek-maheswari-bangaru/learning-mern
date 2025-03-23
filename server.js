const express = require('express');
const { errorHandler } = require('./backend/middleware/errorMiddleware');
const connectDB = require('./config/db');
require('dotenv').config();

const port = 5000;

connectDB();

const app = express();

app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.use('/api/todos', require('./backend/routes/todoRoutes'))

app.use(errorHandler)

app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`);
});

