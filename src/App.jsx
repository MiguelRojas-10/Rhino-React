import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import AppLayout from './components/Layout/AppLayout.jsx'
import Inicio from './pages/Inicio/Inicio.jsx'
import Horarios from './pages/Horarios/Horarios.jsx'
import Personal from './pages/Personal/Personal.jsx'
import Solicitudes from './pages/Solicitudes/Solicitudes.jsx'
import Evaluacion from './pages/Evaluacion/Evaluacion.jsx'
import Resultados from './pages/Resultados/Resultados.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login/empleado" replace />} />
      <Route path="/login/:rol" element={<Login />} />

      <Route path="/:rol" element={<AppLayout />}>
        <Route index element={<Navigate to="inicio" replace />} />
        <Route path="inicio" element={<Inicio />} />
        <Route path="horarios" element={<Horarios />} />
        <Route path="personal" element={<Personal />} />
        <Route path="solicitudes" element={<Solicitudes />} />
        <Route path="evaluacion" element={<Evaluacion />} />
        <Route path="resultados" element={<Resultados />} />
      </Route>
    </Routes>
  )
}

export default App