import express from 'express';
import { login, logout } from '../controllers/loginController.js';

const router = express.Router();

router.get('/login', (req, res) => {
    res.status(200).send('hola mundo');
});

router.post('/login', login);

router.post('/logout', logout);

export default router;