// models/appointmentModel.js
import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    appointmentID: { type: String, required: true },
    appointmentDataTime: { type: String, required: true },
    userId: { type: String, ref: 'User', required: true },
    serviceId: { type: String, ref: 'Service', required: true }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
