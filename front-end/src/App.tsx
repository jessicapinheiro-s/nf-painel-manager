import './App.css'
import LoginPage from './pages/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from './pages/Register';
import { DashboardNF } from './pages/Dahsboard-nf';
import { ProtectedLayout } from './ProtectedRoute';
import { Layout } from './Layout';
import { PublicRoute } from './PublicRoute';
import { Account } from './pages/Account';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route element={<Layout/>}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Route>
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard-nf" element={<DashboardNF />} />
          <Route path="/account" element={<Account />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
