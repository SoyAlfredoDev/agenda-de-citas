import express from 'express';
import { createUserController, getUsersController } from '../controllers/usersController.js';
const router = express.Router()

router.post('/users', async (req, res) => {
    try {
        await createUserController(req, res)
    } catch (error) {
        console.log(error)
    }
})

router.get('/users', async (req, res) => {
    try {
        const users = await getUsersController(req, res);
        console.log(users);
        res.json(users);
    } catch (error) {
        console.log('Error al obtener usuarios:', error);
    }
})



export default router;