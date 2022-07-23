const Task = require('../models/Task');
const Group = require('../models/Group')

const taskController = {};


//Post new TaskGroup

taskController.create = async (req,res) => {
    try {

        //Paso el id del grupo por url
        const {id} = req.params
        //Recupero el user ID del token
        const userId = req.user_id;
        //Busco el id del grupo en los grupos que tengo creados
        const groupId = await Group.findById(id);

        //Requiero el titulo y la descripcion de la task por el body
        const {title,description} = req.body
        //Creo un nuevo objeto task con todos los datos
        const newTask = {
            title,
            description,
            userId,
            groupId
        }

        //Creo una nueva task 
        await Task.create(newTask)

        return res.status(200).json({
            success: true,
            message: "Task Created Successfully",
            data: newTask
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "Error Creating Task",
            error: error.message
        })
    }
}

taskController.getAllTask = async(req,res) => {
    try {
        //Requiero el id del grupo por url
        const {id} = req.params
        //Busco las task del grupo 
        const task = await Task.find({groupId : id})

        return res.status(200).json({
            success: true,
            message: "Here are all your Task",
            data: task
        })
    } catch (error) {
        return res.status(400).json(
            {
                success: false,
                message: 'Unable to retrive group'
            }
        )
    }
}



taskController.deleteTask = async (req,res) => {
    try {
        //Requiero el id de la task por url
        const {id} = req.params
            
        const taskDeleted = await Task.findByIdAndDelete({_id:id});

        console.log("soy taskdeleted",taskDeleted)

        if(taskDeleted == null){
            return res.status(500).json({
                success:false,
                message: "Id doesn't match or you don't have any Task created"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Task deleted Successfully",
            data: taskDeleted
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error detected",
            data: error?.message || error
        })
    }
}

module.exports = taskController