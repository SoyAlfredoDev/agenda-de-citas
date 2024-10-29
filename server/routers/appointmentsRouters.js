import express from 'express';
import { createAppointment, getAppointments, getAppointment, deleteAppointment, updateAppointment } from '../controllers/appointmentController.js';
import { authRequired } from '../middleware/validateToken.js';
import { validateSchema } from '../middleware/validateSchema.js';
import { registerAppointmentSchema } from '../Schemas/appointmentSchema.js';

const router = express.Router();

// create
router.post('/appointment', authRequired, validateSchema(registerAppointmentSchema), createAppointment);

// get appointments
router.get('/appointments', authRequired, getAppointments);

// get appointment by id
router.get('/appointment/:id', authRequired, getAppointment);

// delete appointment
router.delete('/appointment/:id', authRequired, deleteAppointment);

// update appointment
router.put('/appointment/:id', authRequired, updateAppointment);






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
