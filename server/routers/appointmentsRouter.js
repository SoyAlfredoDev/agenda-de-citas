import express from 'express';
import { createAppointmentController } from '../controllers/appointmentController.js';

const router = express.Router();

// Ruta para crear una nueva cita
router.post('/appointments', createAppointmentController);

// Ruta para obtener citas disponibles
router.get('/availableAppointments', (req, res) => {
    try {
        // Ejemplo de datos que podrías enviar (reemplázalo con datos reales)
        const availableAppointments = [
            { id: 1, date: '2024-10-20', time: '10:00 AM' },
            { id: 2, date: '2024-10-20', time: '11:00 AM' },
            { id: 3, date: '2024-10-21', time: '01:00 PM' },
        ];

        res.json(availableAppointments); // Envía los datos de citas disponibles como respuesta
        console.log('Available appointments sent'); // Mensaje en consola para depuración

    } catch (e) {
        console.error('Error fetching available appointments:', e); // Mensaje de error
        res.status(500).json({ error: 'Error fetching available appointments' }); // Envía un error al cliente
    }
});

export default router;
