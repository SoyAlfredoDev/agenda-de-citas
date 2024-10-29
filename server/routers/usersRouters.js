import express from 'express';
import { createUser, getUsers, getUser, updateUser } from '../controllers/usersController.js';
import { validateSchema, } from '../middleware/validateSchema.js';
import { authRequired } from '../middleware/validateToken.js'
import { createUserSchema } from '../Schemas/userSchema.js';

const router = express.Router()

router.post('/user', validateSchema(createUserSchema), createUser);

router.get('/users', authRequired, getUsers);

router.get('/user/:id', authRequired, getUser);

router.put('/user/:id', authRequired, updateUser)

export default router;