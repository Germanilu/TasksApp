const Task = require('../models/Task');

const taskController = {};


//Post new TaskGroup

taskController.create = async (req,res) => {
    try {
        const {taskTitle} = req.body
        

        const newTaskGroup = {taskTitle}

        await Task.create(newTaskGroup)

        return res.status(200).json({
            success: true,
            message: "Task Created Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "Error Creating Task"
        })
    }
}

module.exports = taskController