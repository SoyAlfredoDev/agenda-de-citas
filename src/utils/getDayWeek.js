import moment from "moment";

function getDayNumberWeek(dateInput) {
    // Obtener el día de la semana como número (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
    const date = moment(dateInput, "YYYY-MM-DD");
    const dayOfWeekNumber = date.day();
    return dayOfWeekNumber;
}

function getDayWeek(dateInput) {
    const daysOfWeek = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const numberDay = getDayNumberWeek(dateInput);
    return daysOfWeek[numberDay];
}

export { getDayNumberWeek, getDayWeek };
