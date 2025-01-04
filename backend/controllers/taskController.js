const Task = require('../models/task')

const getTasks = async(req, res)=>{
    const tasks= await Task.find({assignedTo: req.user.id})
    res.json(tasks)
}

const createTask = async(req, res) =>{
    const {title, description, dueDate, priority} = req.body

    const task = await Task.create({
        title, description, dueDate, priority,
        assignedTo: req.user.id,
        createdBy: req.user.id
    })
    res.status(201).json(task)
}

const uodateTask= async(req, res) =>{
    const task = await Task.findById(req.params.id)

    if(!task){
        return res.status(404).json({message: 'Task not found'})
    }

    if(task.createdBy.toString()!== req.user.id){
        return res.status(401).json({message:'Not authorized'})
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.json(updatedTask)
}

const deleteTask = async(req, res)=>{
    const task = await Task.findById(req.params.id)

    if(!task){
        return res.status(404).json({message:'Task not found'})
    }

    if(task.createdBy.toString() !== req.user.id){
        return res.status(401).json({message: 'Not authorized'})
    }

    await task.remove()

    res.json({message: 'Task removed'})
}

module.exports ={getTasks, createTask, updateTask, deleteTask}