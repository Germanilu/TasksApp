const taskController = require('../controllers/TaskController');
const verifyToken = require('../middlewares/verifyToken');
const router = require('express').Router();

//Create new Task 

router.post('/newTask/groupId=:id', verifyToken, taskController.create)
router.get('/task/groupId=:id',verifyToken,taskController.getAllTask)
router.put('/task/id=:id',verifyToken,taskController.update)
router.put('/task/completed/id=:id',verifyToken,taskController.isComplete)
router.delete('/task/id=:id', verifyToken,taskController.deleteTask)


module.exports = router;