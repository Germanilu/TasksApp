const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },

    groupTitle:{
        type: String,
        required: true
    },

    groupDate: {
        type: Date,
        default: new Date(),
        required: true
    },
})

const Group = mongoose.model('Group',groupSchema);
module.exports = Group;