const express = require('express');
const router = express.Router();
const addTask = require('../controllers/task').addTask;
const getTasks = require('../controllers/task').getTasks;

router.post('/add-task', addTask);
router.get('/tasks', getTasks);

module.exports = router;