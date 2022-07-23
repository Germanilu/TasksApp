// Requiero express para las rutas
const router = require('express').Router()
//Me llevo los controllers
const userController = require('../controllers/userController');


//Requiero la funcion middleware de verifyToken
const verifyToken = require('../middlewares/verifyToken');


// Ruta para buscar un usuario por Id
router.get('/user/:id', verifyToken, userController.getUserById); 

//Ruta para borrar el usuario pasando el Id por url
router.delete('/user/:id',verifyToken,  userController.deleteById);

//Ruta para actualizar el usuario pasando el Id por url
router.put('/user/:id', verifyToken, userController.update);

//Exporto router
module.exports = router