const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const myRouter = require('./routes/router');

const PORT = 3000;


 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 
 
 /**
  * handle requests for static files
  */
 app.use(express.static(path.resolve(__dirname, '../index.html')));

 app.use('/api', myRouter);
 
 
 app.use((err, req, res, next) => {
   const defaultErr = {
     log: 'Express error handler caught unknown middleware error',
     status: 500,
     message: { err: 'An error occurred' },
   };
   const errorObj = Object.assign({}, defaultErr, err);
   console.log(errorObj.log);
   return res.status(errorObj.status).json(errorObj.message);
 });
 
 /**
  * start server
  */
 app.listen(PORT, () => {
   console.log(`Server listening on port: ${PORT}...`);
 });
 
 module.exports = app;