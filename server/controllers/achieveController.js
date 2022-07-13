const db = require('../models/achieveModel');

const achieveController = {};

achieveController.getPosts = async (req, res, next) => {
  const {timeframe} = req.query;
  console.log(timeframe)
  const date = new Date();
  let myDate;
  switch (timeframe) {
    case 'Week': 
      myDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
      break;
    case 'Month':
      myDate = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
      break;
    case 'Year':
      myDate = new Date(date.getFullYear() - 1, date.getMonth(), date.getDate());
      break;
    default:
      console.log('default')
      myDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);

  }
  console.log(myDate)


const query = 'SELECT * FROM posts WHERE created_at < $1 ORDER BY created_at DESC;'
const params = [myDate]
try {
  const result = await db.query(query, params);
  res.locals.posts = result.rows;
  console.log('successful fetch');
  next();
}
catch (err) {
  next({
    log: 'Database Error',
    status: 500,
    message: {err: err}
  });
}
};

achieveController.createPosts = async (req, res, next) => {

  const {first_name, last_name, title, description} = req.body;
  const params = [first_name, last_name, title, description];

  const query = 'INSERT INTO posts (first_name, last_name, title, description) VALUES ($1, $2, $3, $4) RETURNING *;'

  try {
    const result = await db.query(query, params);
    res.locals.posts = result.rows;
    console.log('successful fetch');
    next();
  }
  catch (err) {
    next({
      log: 'Database Error',
      status: 500,
      message: {err: err}
    });
  }
  };

module.exports = achieveController;