export default function extractDateInfo(isoDate) {
    const dateObj = new Date(isoDate);
    return {
        year: dateObj.getFullYear(),
        monthNumber: dateObj.getMonth() + 1,  // Los meses en JS van de 0 a 11, por eso se suma 1
        monthName: dateObj.toLocaleString('es-ES', { month: 'long' }), // Nombre completo en español
        dayName: dateObj.toLocaleString('es-ES', { weekday: 'long' }), // Nombre completo del día en español
        dayNumber: dateObj.getDate(),
        dayOfWeek: dateObj.getDay(),  // 0 = domingo, 6 = sábado
        hour: dateObj.toTimeString().substring(0, 5), // Solo la hora y los minutos
        minutes: dateObj.getMinutes(),
        dateTime: isoDate,
        time: dateObj.toTimeString().substring(0, 8) // La hora con segundos
    };
}


/*
  year: 2024,
  monthNumber: 10,
  monthName: "octubre",
  dayName: "domingo",
  dayNumber: 13,
  dayOfWeek: 0,
  hour: "21:30",
  minutes: 30,
  dateTime: "2024-10-13T21:30:00",
  time: "21:30:00"
 */