const express = require('express');

const achieveController = require('../controllers/achieveController');
const router = express.Router();

router.get('/', 
  achieveController.getPosts,
  (req, res) => res.status(200).json(res.locals.posts)
)

router.post('/', 
  achieveController.createPosts,
  (req, res) => res.status(200).json(res.locals.posts))








module.exports = router;