import express from 'express';
import appointmentsRouter from './routers/appointmentsRouter.js';
import usersRouters from './routers/usersRouters.js'
import cors from 'cors';
import morgan from 'morgan';

const app = express();

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());
app.use(morgan('short'))

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

// Rutas
app.use('/api', appointmentsRouter);
// Rutas
app.use('/api', usersRouters);

export default app;
