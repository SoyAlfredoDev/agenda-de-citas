import { v4 as uuidv4 } from 'uuid';
import Appointment from '../models/appointmentModel.js';

const createAppointmentController = async (req, res) => {
    const userId = req.body.userId;
    const serviceId = req.body.serviceId;
    const appointmentDataTime = req.body.appointmentDataTime
    const appointmentID = uuidv4(); // Genera un UUID para la cita
    try {
        // Crear la cita usando el modelo adecuado
        const newAppointment = new Appointment({
            appointmentID,
            appointmentDataTime,
            userId,
            serviceId
        });
        // Guardar la cita en la base de datos
        await newAppointment.save();
        res.status(201).json({ message: 'Cita creada exitosamente' });
    } catch (error) {
        console.error('Error al crear cita:', error);
        res.status(500).json({ message: 'Error al crear cita', error });
    }
};

export { createAppointmentController };
