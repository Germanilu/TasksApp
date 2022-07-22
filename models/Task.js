const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    taskTitle:{
        type: String,
        required: true
    },

    taskDate: {
        type: Date,
        default: new Date(),
        required: true
    },
})

const Task = mongoose.model('Task',taskSchema);
module.exports = Task;