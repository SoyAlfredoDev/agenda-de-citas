import Appointment from '../models/appointmentModel.js';


const createAppointment = async (req, res) => {
    const { serviceId, appointmentDataTime } = req.body;
    try {
        const newAppointment = new Appointment({
            appointmentDataTime,
            userId: req.user.id,
            serviceId
        });
        const savedAppointment = await newAppointment.save();
        res.status(201).json(savedAppointment);
    } catch (error) {
        console.error('Error al crear cita:', error);
        res.status(500).json({ message: 'Error al crear cita', error });
    }
};

const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({ userId: req.user.id }).populate('userId', 'userFirstName userLastName')
        res.status(200).json(appointments)

    } catch (error) {
        console.log("error fetching appointments", error);
        res.status(500).json({ message: "error fetching appointments" });
    }
}

const getAppointment = async (req, res) => {
    const appointmentFound = await Appointment.findById(req.params.id).populate('userId', 'userFirstName userLastName');
    if (!appointmentFound) return res.status(404).json({ message: 'Appointment  not  found' })
    res.status(200).json(appointmentFound)
};

const deleteAppointment = async (req, res) => {
    const appointmentFound = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointmentFound) return res.status(404).json({ message: 'Appointment not found' })
    res.sendStatus(204)
};

const updateAppointment = async (req, res) => {
    const appointmentFound = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!appointmentFound) return res.status(404).json({ message: 'Appointment not found' })
    res.status(200).json(appointmentFound)
};


export { createAppointment, getAppointments, getAppointment, deleteAppointment, updateAppointment };
