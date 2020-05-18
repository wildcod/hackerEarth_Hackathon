const Task = require('../models/task')
const User = require('../models/user')

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
            User.findOneAndUpdate(
                { _id : userId},
                {
                    $push : { 'tasks' : task._id },
                })
                .exec()
                .then(() => {
                    res.status(200).json({
                        message : "Created Successfully",
                        taskDetails : task
                    })
                })
                .catch(error => {
                    res.status(500).json({
                        error : error,
                        message : "user not found"
                    })
                })
        })
        .catch(error => {
            res.status(500).json({
                error : error,
                message : "task adding error"
            })
        })
}

const updateTask = (req, res, next) => {
    const taskId = req.params.taskId;
    console.log(req.body)
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value
    }
    console.log(updateOps)
    Task.findOneAndUpdate(
        { _id : taskId },
        { $set : updateOps },
        { new : true}
        )
        .exec()
        .then(result => {
            res.status(200).json({
                message : "Task Updated",
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
}

const deleteTask = (req, res, next) => {
    Task.findOneAndRemove(
        {
            _id : req.params.taskId
        },
        )
        .exec()
        .then(() => {
            res.status(200).json({
                message: "Task deleted",
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
    deleteTask,
    updateTask
}