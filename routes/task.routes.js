const taskController = require('../controllers/TaskController');
const verifyToken = require('../middlewares/verifyToken');
const router = require('express').Router();

//Create new Task Group 

router.post('/newTask', verifyToken, taskController.create)


module.exports = router;