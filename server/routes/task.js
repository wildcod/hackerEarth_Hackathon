const express = require('express');
const router = express.Router();
const addTask = require('../controllers/task').addTask;
const deleteTask = require('../controllers/task').deleteTask;
const updateTask = require('../controllers/task').updateTask;

router.post('/add-task', addTask);
router.delete('/delete-task/:taskId', deleteTask);
router.put('/update-task/:taskId', updateTask);

module.exports = router;