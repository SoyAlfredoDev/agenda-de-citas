import express from 'express';
import { authRequired } from '../middleware/validateToken.js';
import { tasks } from '../controllers/tasksController.js';

const router = express.Router();

router.get('/tasks', authRequired, tasks);

export default router;