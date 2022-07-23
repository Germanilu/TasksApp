const Group = require('../models/Group');

const groupController = {};


//Post new TaskGroup

groupController.create = async (req,res) => {
    try {
        const {groupTitle} = req.body
        const userId = req.user_id;
        const userName = req.user_name
        const userEmail = req.user_email
        
        

        const newGroup = {groupTitle,userId,userName,userEmail}

        await Group.create(newGroup)

        return res.status(200).json({
            success: true,
            message: "Group Created Successfully",
            data: newGroup
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "Error Creating Group"
        })
    }
}

groupController.getMyGroup = async(req,res) => {
    try {
        const idUser = req.user_id;

        const group = await Group.find({userId : idUser})

        return res.status(200).json({
            success: true,
            message: "Here are all your groups",
            data: group
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



groupController.deleteGroup = async (req,res) => {
    try {
        const {id} = req.params
            
        const groupDeleted = await Group.findByIdAndDelete({_id:id});

        console.log("soy groupdeleted",groupDeleted)
        if(groupDeleted == null){
            return res.status(500).json({
                success:false,
                message: "Id doesn't match or you don't have any group created"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Group deleted Successfully",
            data: groupDeleted
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error detected",
            data: error?.message || error
        })
    }
}

module.exports = groupController