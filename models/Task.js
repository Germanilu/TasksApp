const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    groupId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Group',
        required:true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true, 
        unique: true, 
    },
    isCompleted:{
        type: Boolean,
        required: true,
        default: false
    },
    taskDate: {
        type: Date,
        default: new Date(),
        required: true
    },
},

);

const Task = mongoose.model('Task',TaskSchema);

module.exports = Task;
