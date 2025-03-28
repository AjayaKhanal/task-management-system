const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    status:{
        type: String,
        enum: ['To Do', 'In Progress', 'Completed'],
        default: 'To Do'
    },
    priority:{
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium'
    },
    dueDate:{
        type: Date
    },
    assignedTo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Task', taskSchema)