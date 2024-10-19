import { useState } from "react";
import InputForm from "../components/InputForm";
import appointmentGenerator from "../utils/appointmentGenerator.js"
import { getDayWeek } from "../utils/getDayWeek.js"
import Button from "../components/Button.js";
import '../styles/newApppointment.css'
function NewAppointment({ appointmentInfo }) {
    const [appointmentDay, setAppointmentDay] = useState('');
    const [availableAppointments, setAvailableAppointments] = useState([{ 'hour': 'selecciones una fecha' }]);
    const handleInputChange = async (e) => {
        // get the new value of 'appointmentDay' variable
        const newAppointmentDay = e.target.value

        // update the 'appointmentDay' variable
        setAppointmentDay(newAppointmentDay)

        //get the day of the week, return: lunes, martes, miercoles....
        const dayWeek = getDayWeek(newAppointmentDay)

        // ****** import reservas, se debe extrar de la db las reservas
        let reservations;
        let arrayReservations;
        try {
            const response = await fetch('../src/dataBase/appointments.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            reservations = await response.json();
            arrayReservations = Object.values(reservations).map(element => element.key);
        } catch (error) {
            console.error("Error fetching reservations:", error);
        }

        // genera todas las citas posibles del dia 
        const appointments = appointmentGenerator(newAppointmentDay)

        let availableAppointments
        if (appointments.length > 0) {
            availableAppointments = appointments.filter(appoint => !arrayReservations.includes(appoint.key));
            setAvailableAppointments(availableAppointments)
        } else {
            setAvailableAppointments([]);
        }
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        const hourSelected = e.target.textContent
        const appointmentSelected = availableAppointments.find(appointment => appointment.hour === hourSelected);
        appointmentInfo(appointmentSelected)
    }

    return (
        <>
            <div className="boxNewAppointment">
                <div className="newAppointmentNegocio">
                    <h1>Óptica y Cristal Ltda</h1>
                </div>
                <div className="newAppointmentsAvailable" >
                    <InputForm
                        inputName=""
                        inputId="date"
                        inputValue={appointmentDay}
                        type="date"
                        handleInputChange={handleInputChange}
                    />
                    <div>
                        {availableAppointments.length > 0 ? (
                            <div>
                                {availableAppointments.map((element, index) => (
                                    <div key={index}>
                                        <button onClick={handleOnClick}>{element.hour}</button>

                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div>No hay citas disponibles</div>
                        )}
                    </div>
                </div>
                <div className="newAppointmentButton">
                    <Button name="Solicitar extra cupo" handleOnClick={null} />
                </div>
            </div>
        </>
    )
}

export default NewAppointment;