// models/appointmentModel.js
import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    appointmentDataTime: { type: String, required: true },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        requerid: true
    },
    serviceId: { type: String, ref: 'Service', required: true },
}, {
    timestamps: true
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
