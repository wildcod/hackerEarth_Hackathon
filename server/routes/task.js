const express = require('express');
const router = express.Router();
const addTask = require('../controllers/task').addTask;

router.post('/add-task', addTask);

module.exports = router;