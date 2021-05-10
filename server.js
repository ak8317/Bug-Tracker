const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
require('dotenv').config();
const app = express();
const connectDB = require('./config/db');
const globalErrorhandler = require('./controller/errorController');

process.on('uncaughtException', (err) => {
  console.error(err.name, err.message);
  console.log('Shutting Down');
  process.exit(1);
});

//conencting to db
connectDB();

//3rd Party-midlleware
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10kb' }));

//Data sanitization against Nosql query injection
app.use(mongoSanitize());
///Data sanitization against XSS
app.use(xss());

//routes
app.use('/api/users', require('./routes/userRoute'));

app.use(globalErrorhandler);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.error(err.name, err.message);
  server.close(() => {
    console.log('Shutting Down');
    process.exit(1);
  });
});
