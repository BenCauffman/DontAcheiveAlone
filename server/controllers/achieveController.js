const db = require('../models/achieveModel');

const achieveController = {};

achieveController.getPosts = async (req, res, next) => {
  const {timeframe} = req.query;
  console.log(timeframe)
  const date = new Date();
  let myDate;
  let maxDistanceDate;
  switch (timeframe) {
    case 'Week': 
      myDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
      maxDistanceDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 14)
      break;
    case 'Month':
      myDate = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
      maxDistanceDate = new Date(date.getFullYear(), date.getMonth() - 2, date.getDate())
      break;
    case 'Year':
      myDate = new Date(date.getFullYear() - 1, date.getMonth(), date.getDate());
      maxDistanceDate = new Date(date.getFullYear() - 1, date.getMonth(), date.getDate() - 7)
      break;
    default:
      console.log('default')
      myDate = new Date(date.getFullYear() - 5, date.getMonth(), date.getDate());
      maxDistanceDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 14)

  }
  console.log(myDate)


const query = 'SELECT * FROM posts WHERE created_at > $1  ORDER BY created_at DESC;'
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
  console.log(req.body);

  const {first_name, last_name, title, description, tag} = req.body;
  const params = [first_name, last_name, title, description, tag];

  const query = 'INSERT INTO posts (first_name, last_name, title, description, tag) VALUES ($1, $2, $3, $4, $5) RETURNING *;'

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