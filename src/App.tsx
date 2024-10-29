import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/registar' element={<RegisterPage />} />
        <Route path='/porfile' element={""} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;