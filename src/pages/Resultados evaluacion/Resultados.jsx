import logoRhino from '../../Images/LogoAmarillo.png'

function Resultados() {
  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Resultados - Rhino</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <header className="header-principal">
    <div className="seccion-superior">
      <img src={logoRhino} alt="Logo Rhino" className="logo-pequeno" />
      <nav className="seccion-navegacion">
        <a href="/inicio" id="nav-inicio" className="nav-btn">
          Inicio
        </a>
        <a href="/horarios" id="nav-horarios" className="nav-btn">
          Horarios
        </a>
        <a
          href="/gestion-horarios"
          id="nav-gestion-horarios"
          className="nav-btn"
        >
          Gestión de Horarios
        </a>
        <a href="/empleados" id="nav-personal" className="nav-btn">
          Personal
        </a>
        <a href="/solicitudes" id="nav-solicitudes" className="nav-btn">
          Solicitudes
        </a>
        <a
          href="/gestion-solicitudes"
          id="nav-gestion-solicitudes"
          className="nav-btn"
        >
          Gestión de solicitudes
        </a>
        <a
          href="/resultados"
          id="nav-resultados"
          className="nav-btn activo"
        >
          Resultados de evaluación
        </a>
        <a
          href="/evaluaciones"
          id="nav-gestion-evaluaciones"
          className="nav-btn"
        >
          Gestión de evaluaciones
        </a>
        <a
          href="/ofertas"
          id="nav-gestion-ofertas"
          className="nav-btn"
        >
          Gestionar ofertas laborales
        </a>
      </nav>
      <div className="contenedor-perfil">
        <div className="info-usuario">
          <span id="nombre-usuario" className="nombre">
            Cargando...
          </span>
          <span id="rol-usuario" className="rol">
            Cargando...
          </span>
        </div>
        <span className="btn-cerrar-sesion" onclick="cerrarSesion()">
          Cerrar sesión
        </span>
      </div>
    </div>
  </header>
  <main className="contenido-pagina">
    <div className="contenedor-resultados">
      <h1 className="titulo-seccion">Resultados de Evaluación</h1>
      {/* CUADRÍCULA DE CATEGORÍAS */}
      <div className="grid-evaluaciones">
        {/* 1. PUNTUALIDAD (30%) */}
        <div className="tarjeta-evaluacion">
          <div className="cabecera-categoria">
            <h2>Puntualidad</h2>
            <span className="peso-categoria">30%</span>
          </div>
          <div className="lista-metricas">
            <div className="metrica">
              <span className="nombre-metrica">Hora de llegada</span>
              <span className="puntaje-metrica">9.0</span>
            </div>
            <div className="metrica">
              <span className="nombre-metrica">
                Tiempo de culminación de tareas
              </span>
              <span className="puntaje-metrica">8.0</span>
            </div>
          </div>
          <div className="promedio-categoria">
            <span>Promedio:</span> <strong>8.5</strong>
          </div>
        </div>
        {/* 2. CALIDAD (30%) */}
        <div className="tarjeta-evaluacion">
          <div className="cabecera-categoria">
            <h2>Calidad</h2>
            <span className="peso-categoria">30%</span>
          </div>
          <div className="lista-metricas">
            <div className="metrica">
              <span className="nombre-metrica">Precisión en entregables</span>
              <span className="puntaje-metrica">9.5</span>
            </div>
            <div className="metrica">
              <span className="nombre-metrica">Atención al detalle</span>
              <span className="puntaje-metrica">9.5</span>
            </div>
          </div>
          <div className="promedio-categoria">
            <span>Promedio:</span> <strong>9.5</strong>
          </div>
        </div>
        {/* 3. COLABORACIÓN (15%) */}
        <div className="tarjeta-evaluacion">
          <div className="cabecera-categoria">
            <h2>Colaboración</h2>
            <span className="peso-categoria">15%</span>
          </div>
          <div className="lista-metricas">
            <div className="metrica">
              <span className="nombre-metrica">Trabajo en equipo</span>
              <span className="puntaje-metrica">8.0</span>
            </div>
            <div className="metrica">
              <span className="nombre-metrica">Comunicación asertiva</span>
              <span className="puntaje-metrica">9.0</span>
            </div>
          </div>
          <div className="promedio-categoria">
            <span>Promedio:</span> <strong>8.5</strong>
          </div>
        </div>
        {/* 4. CUMPLIMIENTO (25%) */}
        <div className="tarjeta-evaluacion">
          <div className="cabecera-categoria">
            <h2>Cumplimiento</h2>
            <span className="peso-categoria">25%</span>
          </div>
          <div className="lista-metricas">
            <div className="metrica">
              <span className="nombre-metrica">Seguimiento de normativas</span>
              <span className="puntaje-metrica">10.0</span>
            </div>
            <div className="metrica">
              <span className="nombre-metrica">Asistencia a reuniones</span>
              <span className="puntaje-metrica">9.0</span>
            </div>
          </div>
          <div className="promedio-categoria">
            <span>Promedio:</span> <strong>9.5</strong>
          </div>
        </div>
      </div>
      {/* PROMEDIO GENERAL PONDERADO */}
      {/* Cálculo: (8.5*0.30) + (9.5*0.30) + (8.5*0.15) + (9.5*0.25) = 9.05 (Redondeado a 9.1) */}
      <div className="tarjeta-promedio-final">
        <h2>Promedio General Ponderado</h2>
        <div className="contenedor-puntaje-final">
          <span className="puntaje-final">9.1</span>
          <span className="escala-final">/ 10</span>
        </div>
        <p className="mensaje-desempeno">
          ¡Excelente desempeño! Sigue aportando valor al equipo Rhino.
        </p>
      </div>
    </div>
  </main>
</>
  )
}

export default Resultados
