import { createElement } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoRhino from '../Images/LogoAmarillo.png'
import './Navbar.css'

const enlaces = [
  { id: 'nav-inicio', to: '/inicio', label: 'Inicio' },
  { id: 'nav-horarios', to: '/horarios', label: 'Horarios' },
  {
    id: 'nav-gestion-horarios',
    to: '/gestion-horarios',
    label: 'Gestión de Horarios',
  },
  { id: 'nav-personal', to: '/empleados', label: 'Personal' },
  { id: 'nav-solicitudes', to: '/solicitudes', label: 'Solicitudes' },
  {
    id: 'nav-gestion-solicitudes',
    to: '/gestion-solicitudes',
    label: 'Gestión de solicitudes',
  },
  {
    id: 'nav-resultados',
    to: '/resultados',
    label: 'Resultados de evaluación',
  },
  {
    id: 'nav-gestion-evaluaciones',
    to: '/evaluaciones',
    label: 'Gestión de evaluaciones',
  },
  {
    id: 'nav-gestion-ofertas',
    to: '/ofertas',
    label: 'Gestionar ofertas laborales',
  },
]

const enlacesPorRol = {
  empleado: [
    'nav-inicio',
    'nav-horarios',
    'nav-solicitudes',
    'nav-resultados',
  ],
  analista: [
    'nav-inicio',
    'nav-horarios',
    'nav-solicitudes',
    'nav-gestion-ofertas',
  ],
  supervisor: [
    'nav-inicio',
    'nav-horarios',
    'nav-gestion-horarios',
    'nav-personal',
    'nav-solicitudes',
    'nav-gestion-solicitudes',
  ],
  gerente: [
    'nav-inicio',
    'nav-horarios',
    'nav-gestion-horarios',
    'nav-personal',
    'nav-solicitudes',
    'nav-gestion-solicitudes',
    'nav-resultados',
    'nav-gestion-evaluaciones',
  ],
}

const nombresRol = {
  empleado: 'Empleado',
  analista: 'Analista',
  supervisor: 'Supervisor',
  gerente: 'Gerente General',
}

function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const rolGuardado = localStorage.getItem('sesionRol')
  const rol = Object.prototype.hasOwnProperty.call(enlacesPorRol, rolGuardado)
    ? rolGuardado
    : 'empleado'
  const nombre = localStorage.getItem('sesionNombre') || 'Usuario Desconocido'

  const salir = () => {
    localStorage.removeItem('sesionRol')
    localStorage.removeItem('sesionNombre')
    navigate('/')
  }

  const enlacesVisibles = enlaces
    .filter((enlace) => enlacesPorRol[rol].includes(enlace.id))
    .map((enlace) => {
      const activo = pathname === enlace.to
      return createElement(
        Link,
        {
          key: enlace.id,
          id: enlace.id,
          to: enlace.to,
          className: `nav-btn${activo ? ' activo' : ''}`,
          'aria-current': activo ? 'page' : undefined,
        },
        enlace.label,
      )
    })

  return (
    <header className="header-principal">
      <div className="seccion-superior">
        <img src={logoRhino} alt="Logo Rhino" className="logo-pequeno" />
        <nav className="seccion-navegacion">{enlacesVisibles}</nav>
        <div className="contenedor-perfil">
          <div className="info-usuario">
            <span className="nombre">{nombre}</span>
            <span className="rol">{nombresRol[rol]}</span>
          </div>
          <button
            type="button"
            className="btn-cerrar-sesion"
            onClick={salir}
            style={{ background: 'none', border: 0, padding: 0 }}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar