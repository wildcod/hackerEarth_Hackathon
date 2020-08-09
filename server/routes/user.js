const express = require('express');
const router = express.Router();
const checkAuth = require('../api/checkAuth');

const signUp = require('../controllers/user').signUp;
const login = require('../controllers/user').login;
const getTasks = require('../controllers/user').getTasks;


router.post('/signup', signUp);
router.post('/login', login);
router.get('/tasks/:page', getTasks);

module.exports = router;