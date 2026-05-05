import './App.css'
import LoginPage from './pages/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from './pages/Register';
import { DashboardNF } from './pages/Dahsboard-nf';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/dashboard-nf" element={<DashboardNF/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
