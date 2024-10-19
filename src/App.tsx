import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import NewAppointment from "./pages/NewAppointment";
import './styles/general.css'
import InfoNewAppointment from "./components/infoNewAppointment";
import extractDateInfo from './utils/extractDateInfo.js'

function App() {
  const [year, setYear] = useState();
  const [monthName, setMonthName] = useState();
  const [dayNumber, setDayNumber] = useState();
  const [dayName, setDayName] = useState();
  const [hour, setHour] = useState();


  const appointmentInfo = (appointmentInfo) => {
    const appointment = extractDateInfo(appointmentInfo.key)
    setYear(appointment.year);
    setMonthName(appointment.monthName);
    setDayNumber(appointment.dayNumber);
    setDayName(appointment.dayName);
    setHour(appointment.hour);
  }



  return (
    <div className="boxBody">
      <div className="boxNavBar">
        <NavBar />
      </div>
      <div className="boxContent">
        <NewAppointment appointmentInfo={appointmentInfo} />
      </div>
      <div className="boxInfo">
        <InfoNewAppointment year={year} month={monthName} day={dayNumber} date={dayName} hour={hour} />
      </div>
    </div>
  )
}

export default App;
