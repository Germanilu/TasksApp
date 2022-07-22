const taskController = require('../controllers/TaskController');

const router = require('express').Router();

//Create new Task Group 

router.post('/newTask', taskController.create)


module.exports = router;