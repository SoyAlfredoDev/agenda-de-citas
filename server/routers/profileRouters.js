import express from 'express';
import { profile } from '../controllers/profileController.js';
import { authRequired } from '../middleware/validateToken.js';

const router = express.Router();

router.get('/profile', authRequired, profile);


export default router;
