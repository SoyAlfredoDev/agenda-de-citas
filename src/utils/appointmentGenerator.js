import { getDayNumberWeek, getDayWeek } from "./getDayWeek.js"


function appointmentGenerator(appointmentDay) {

    const dayNumberWeek = getDayNumberWeek(appointmentDay)
    // ****** importar las configuraciones   
    const appointmentConfig = { "days": [1, 2, 3, 4, 5], "duration": 60, "end": "18:00", "start": "10:00" }

    const startHour = appointmentConfig.start;
    const endHour = appointmentConfig.end;
    const duration = appointmentConfig.duration;
    const days = appointmentConfig.days;

    // Convertir la hora de inicio a minutos
    let startHourInMinutes = Number(startHour.slice(0, 2)) * 60 + Number(startHour.slice(-2));

    // Convertir la hora de fin a minutos
    let endHourInMinutes = Number(endHour.slice(0, 2)) * 60 + Number(endHour.slice(-2));

    // Agregar citas disponibles
    let appointmentsAvailable = []

    const day = getDayWeek(appointmentDay)

    if (days.includes(dayNumberWeek)) {
        for (let h = startHourInMinutes; h < endHourInMinutes; h += duration) {
            let convertToTime = String(Math.floor(h / 60)).padStart(2, '0');

            let convertToMinutes = String(Math.floor(h % 60)).padStart(2, '0');

            const appointment = {
                // la key debe ser en formato YYYY-MM-DDthh:mm:ss 2024-10-12t10:00:00
                key: `${appointmentDay}t${convertToTime}:${convertToMinutes}:00`,
                hour: `${convertToTime}:${convertToMinutes}`,
                day: day,
                status: 1,
            };

            appointmentsAvailable.push(appointment)
        }
    }

    return appointmentsAvailable
}

export default appointmentGenerator;