import { createElement } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Inicio from './pages/Inicio/Inicio.jsx'
import Login from './pages/Login/Login.jsx'

function RutaInicio() {
  const navigate = useNavigate()
  return createElement(Inicio, { onCerrarSesion: () => navigate('/') })
}

function App() {
  return createElement(
    BrowserRouter,
    null,
    createElement(
      Routes,
      null,
      createElement(Route, { path: '/', element: createElement(Login) }),
      createElement(Route, { path: '/inicio', element: createElement(RutaInicio) }),
      createElement(Route, {
        path: '*',
        element: createElement(Navigate, { to: '/', replace: true }),
      }),
    ),
  )
}

export default App