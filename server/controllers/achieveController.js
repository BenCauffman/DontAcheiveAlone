const db = require('../models/achieveModel');

const achieveController = {};

achieveController.getPosts = async (req, res, next) => {
  const {timeframe} = req.query;
  switch timeframe {
    case:
  }


const query = 'SELECT * FROM posts WHERE created_at ;'
const params = [timeframe]
try {
  const result = await db.query(query);
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