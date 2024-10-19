import InputDays from "../components/InputDays"
import InputForm from "../components/InputForm";
import { useState } from "react";


function AddConfigAppointment() {
    const [duration, setDuration] = useState('');
    const [startHour, setStartHour] = useState('10:00');
    const [endHour, setEndHour] = useState('17:00');
    const [daysSelect, setDaysSelect] = useState('');//valor hijo 

    const [contentTable, setContentTable] = useState([]);

    const handleDurationChange = (e) => { setDuration(Number(e.target.value)) };
    const handleStartHourChange = (e) => { setStartHour(e.target.value) };
    const handleEndHourChange = (e) => { setEndHour(e.target.value) }

    // recibir valores los dias selecionados 
    const recibirValor = (valor) => {
        setDaysSelect(valor);
    };

    const handleClick = (e) => {
        e.preventDefault();
        const dayName = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
        // Convertir la hora de inicio a minutos
        let startHourInMinutes = Number(startHour.slice(0, 2)) * 60 + Number(startHour.slice(-2));

        // Convertir la hora de fin a minutos
        let endHourInMinutes = Number(endHour.slice(0, 2)) * 60 + Number(endHour.slice(-2));

        // Días a los que se aplicará la configuración

        // Agregar citas disponibles
        setContentTable([])
        let arrayyy = []

        daysSelect.forEach(element => {
            for (let h = startHourInMinutes; h < endHourInMinutes; h += duration) {
                let convertToTime = Math.floor(h / 60);
                let convertToMinutes = h % 60;

                const appointment = {
                    key: `${element}:${convertToTime}: ${convertToMinutes}`,
                    hour: convertToTime,
                    minute: convertToMinutes,
                    hourFormat: null,
                    time: `${convertToTime}: ${convertToMinutes}`,
                    status: 1,
                    dayId: element,
                    day: dayName[element],
                };
                arrayyy.push(appointment)
            }
        });

        setContentTable(arrayyy);

        // logica se guardara en la db  

        let appointmentsAvailable = {
            days: daysSelect,
            duration: duration,
            star: startHour,
            end: endHour
        };

        console.log(appointmentsAvailable)
    };

    return (
        <>
            <div className="container">
                <div className="text-center mb-3">
                    <h1>Configuración de Citas</h1>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-3 ">
                        <InputDays enviarValor={recibirValor} />
                    </div>
                    <div className="col-md-4 mb-3">
                        <InputForm
                            inputName="Duración: (minútos)"
                            inputId="duration"
                            inputValue={duration}
                            type="number"
                            placeholder="0 minutos"
                            handleInputChange={handleDurationChange}
                        />
                        <InputForm
                            inputName="Hora inicio"
                            inputId="startHour"
                            type="time"
                            inputValue={startHour}
                            handleInputChange={handleStartHourChange}
                        />

                        <InputForm
                            inputName="Hasta las"
                            inputId="endHour"
                            type="time"
                            inputValue={endHour}
                            handleInputChange={handleEndHourChange}
                        />

                        <button
                            className="btn btn-warning m-3"
                            onClick={handleClick}>ver
                        </button>

                        <button
                            className="btn btn-warning m-3">Guardar
                        </button>

                    </div>
                    <div className="col-md-4">
                        <div className="table-responsibe card">
                            <table className="table table-sm table-hover">
                                <thead>
                                    <tr>
                                        <th>Día</th>
                                        <th>Hora</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contentTable.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.day}</td>
                                            <td>{row.time}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddConfigAppointment;