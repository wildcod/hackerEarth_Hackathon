const Task = require('../models/task')

const addTask = (req, res, next) => {
    const { userId, title, description, due_date, label, status } = req.body

    const task = new Task({
        task_id: new mongoose.Types.ObjectId(),
        user_id: userId,
        title: title,
        description: description,
        due_date : new Date(due_date),
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

module.export = {
    addTask
}