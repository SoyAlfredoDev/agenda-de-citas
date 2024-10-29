import express from 'express';
import appointmentsRouter from './routers/appointmentsRouters.js';
import usersRouters from './routers/usersRouters.js';
import loginRouters from './routers/loginRouters.js';
import profileRouters from './routers/profileRouters.js';
import tasksRouters from './routers/tasksRouters.js';



import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

const app = express();

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());
app.use(morgan('short'));
app.use(cookieParser());

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

// Rutas
app.use('/api', appointmentsRouter);
app.use('/api', usersRouters);
app.use('/api', loginRouters);
app.use('/api', profileRouters);
app.use('/api', tasksRouters);

export default app;
