const Task = require('../models/task')
const mongoose = require('mongoose')

const addTask = (req, res, next) => {
    const { userId, title, description, dueDate, label, status } = req.body
    console.log(dueDate)
    const task = new Task({
        title: title,
        description: description,
        due_date : new Date(dueDate),
        label: label,
        status: status
    })

    task.save()
        .then(task => {
            res.status(200).json({
                message : "Created Successfully",
                taskDetails : task
            })
        })
        .catch(error => {
            res.status(500).json({
                error : error,
                message : "task adding error"
            })
        })
}

const getTasks = (req, res, next) => {
    Task.find()
        .exec()
        .then(tasks => {
            const count = tasks.length;
            res.status(200).json({
                count : count,
                tasks : tasks
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
}

module.exports = {
    addTask,
    getTasks
}