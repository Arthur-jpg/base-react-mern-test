const express = require('express');
const { allUsers, singleUser, editUser, deleteUser } = require('../controllers/userController')
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const router = express.Router();


// auth routes
// /api/allusers
/*
Tecnicamente para deixar sem login para ver a página de inicio é só tirar o is authenticated
*/
router.get('/allusers', isAuthenticated, isAdmin, allUsers)

// /api/user/id
router.get('/user/:id', isAuthenticated, singleUser)


/*
Nesse projeto não será necessário essa parte, pq não terá lugar par editar o usuário
Porém, é legal saber que essa route possibilita você editar as informações contida na base de dados de cada usuário
*/


// /api/user/edit/id
router.put('/user/edit/:id', isAuthenticated, editUser)

// /api/admin/user/delete/:id -> vídeo 5
router.delete('/api/admin/user/delete/:id', isAuthenticated, isAdmin, deleteUser)


module.exports = router