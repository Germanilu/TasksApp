const groupController = require('../controllers/GroupController');
const verifyToken = require('../middlewares/verifyToken');
const router = require('express').Router();

//Create new Task Group 

router.post('/newGroup', verifyToken, groupController.create)
router.get('/group',verifyToken,groupController.getMyGroup)
router.put('/group/id=:id',verifyToken,groupController.update)
router.delete('/group/id=:id', verifyToken,groupController.deleteGroup)


module.exports = router;