import { createElement } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio/Inicio.jsx'
import Login from './pages/Login/Login.jsx'
import GestionSolicitudes from './pages/Gestion solicitudes/Gestion-solicitudes.jsx'
import Postulantes from './pages/Oferta postulantes/Postulantes.jsx'
import Solicitudes from './pages/Solicitudes/Solicitudes.jsx'
import Evaluaciones from './pages/Gestion evaluaciones/Evaluaciones.jsx'
import Aplicaciones from './pages/Aplicaciones visitante/Aplicaciones.jsx'
import Horarios from './pages/Horarios/Horarios.jsx'
import GestionHorarios from './pages/Gestion horarios/Gestion_horarios.jsx'
import Empleados from './pages/Gestion Empleados/Empleados.jsx'
import Ofertas from './pages/Gestion ofertas/Ofertas.jsx'
import Resultados from './pages/Resultados evaluacion/Resultados.jsx'

function App() {
  return createElement(
    BrowserRouter,
    null,
    createElement(
      Routes,
      null,
      createElement(Route, { path: '/', element: createElement(Login) }),
      createElement(Route, { path: '/inicio', element: createElement(Inicio) }),
      createElement(
        Route,
        { path: '/ofertas-postulantes', element: createElement(Postulantes) },
      ),
      createElement(Route, {
        path: '/solicitudes',
        element: createElement(Solicitudes),
      }),
      createElement(Route, {
        path: '/evaluaciones',
        element: createElement(Evaluaciones),
      }),
      createElement(Route, {
        path: '/resultados',
        element: createElement(Resultados),
      }),
      createElement(Route, {
        path: '/horarios',
        element: createElement(Horarios),
      }),
      createElement(Route, {
        path: '/gestion-horarios',
        element: createElement(GestionHorarios),
      }),
      createElement(Route, {
        path: '/empleados',
        element: createElement(Empleados),
      }),
      createElement(Route, {
        path: '/ofertas',
        element: createElement(Ofertas),
      }),
      createElement(Route, {
        path: '/aplicaciones-visitante',
        element: createElement(Aplicaciones),
      }),
      createElement(Route, {
        path: '/gestion-solicitudes',
        element: createElement(GestionSolicitudes),
      }),
      createElement(Route, {
        path: '*',
        element: createElement(Navigate, { to: '/', replace: true }),
      }),
    ),
  )
}

export default App