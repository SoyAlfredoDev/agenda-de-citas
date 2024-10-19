import axios from 'axios';

interface Props {
    date: string;
    day: number;
    month: string;
    year: number;
    hour: string;
    userId: string; // Añadimos userId y serviceId a los props
    serviceId: string;
}

function InfoNewAppointment(props: Props) {
    const { date, day, month, year, hour } = props;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const appointmentData = {
            appointmentDataTime: date,
            userId: 'userId',
            serviceId: 'userId'
        };

        try {
            const response = await axios.post('http://localhost:5000/api/appointments', appointmentData);
            console.log('Cita creada:', response.data);

        } catch (error: any) {
            console.error('Error al crear la cita:', error?.response?.data?.message || error.message);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="boxInfo">
                    <div className="boxInfoDate">
                        <div className="dayName">
                            {date}
                        </div>
                        <div className="dayNumber">
                            {day}
                        </div>
                        <div className="monthAndYear">
                            {month} {year}
                        </div>
                    </div>
                    <div>
                        Servicios:
                        <ul>
                            <li>Corte de pelo</li>
                        </ul>
                        <div>
                            Hora: {hour}
                        </div>
                        <div>
                            Dirección: Huerfanos 713, Local 18
                        </div>
                        <div>
                            Valor: 5.000$
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success">
                        Confirmar
                    </button>
                </div>
            </form>
        </>
    );
}

export default InfoNewAppointment;
