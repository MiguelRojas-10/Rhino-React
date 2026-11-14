import './Horarios.css'
function Horarios(){
    return(

<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Horarios - Rhino</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="style.css" />
  <header className="header-principal">
    <div className="seccion-superior">
      <img src="LogoAmarillo.png" alt="Logo Rhino" className="logo-pequeno" />
      <nav className="seccion-navegacion">
        <a href="Principal.html" id="nav-inicio" className="nav-btn">
          Inicio
        </a>
        <a href="Horarios.html" id="nav-horarios" className="nav-btn activo">
          Horarios
        </a>
        <a
          href="GestionHorarios.html"
          id="nav-gestion-horarios"
          className="nav-btn"
        >
          Gestión de Horarios
        </a>
        <a href="Personal.html" id="nav-personal" className="nav-btn">
          Personal
        </a>
        <a href="Solicitudes.html" id="nav-solicitudes" className="nav-btn">
          Solicitudes
        </a>
        <a
          href="GestionSolicitudes.html"
          id="nav-gestion-solicitudes"
          className="nav-btn"
        >
          Gestión de solicitudes
        </a>
        <a href="Resultados.html" id="nav-resultados" className="nav-btn">
          Resultados de evaluación
        </a>
        <a
          href="GestionEvaluaciones.html"
          id="nav-gestion-evaluaciones"
          className="nav-btn"
        >
          Gestión de evaluaciones
        </a>
        <a
          href="GestionOfertas.html"
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
    <div className="contenedor-horarios">
      <h1 className="titulo-seccion">Mi Horario</h1>
      {/* SECCIÓN 1: CONTADORES DE HORAS */}
      <div className="resumen-horas">
        {/* Mes Anterior */}
        <div className="tarjeta-mes mes-anterior">
          <h2 className="titulo-mes">Mes Anterior</h2>
          <div className="grid-horas">
            <div className="item-hora">
              <span className="etiqueta-hora">Horas Normales</span>
              <span className="valor-hora">160 hrs</span>
            </div>
            <div className="item-hora">
              <span className="etiqueta-hora">Horas Extra</span>
              <span className="valor-hora">12 hrs</span>
            </div>
            <div className="item-hora">
              <span className="etiqueta-hora">Recargo Nocturno</span>
              <span className="valor-hora">24 hrs</span>
            </div>
            <div className="item-hora">
              <span className="etiqueta-hora">Extra con Recargo</span>
              <span className="valor-hora">4 hrs</span>
            </div>
          </div>
        </div>
        {/* Mes Actual */}
        <div className="tarjeta-mes mes-actual">
          <h2 className="titulo-mes">Mes Actual (En curso)</h2>
          <div className="grid-horas">
            <div className="item-hora">
              <span className="etiqueta-hora">Horas Normales</span>
              <span className="valor-hora">80 hrs</span>
            </div>
            <div className="item-hora">
              <span className="etiqueta-hora">Horas Extra</span>
              <span className="valor-hora">5 hrs</span>
            </div>
            <div className="item-hora">
              <span className="etiqueta-hora">Recargo Nocturno</span>
              <span className="valor-hora">8 hrs</span>
            </div>
            <div className="item-hora">
              <span className="etiqueta-hora">Extra con Recargo</span>
              <span className="valor-hora">0 hrs</span>
            </div>
          </div>
        </div>
      </div>
      {/* SECCIÓN 2: LEYENDA DE COLORES */}
      <div className="leyenda-turnos">
        <p>
          <span className="cuadro-leyenda turno-m" /> <strong>M:</strong> Mañana
        </p>
        <p>
          <span className="cuadro-leyenda turno-t" /> <strong>T:</strong> Tarde
        </p>
        <p>
          <span className="cuadro-leyenda turno-n" /> <strong>N:</strong> Noche
        </p>
        <p>
          <span className="cuadro-leyenda turno-d" /> <strong>D:</strong>{" "}
          Descanso
        </p>
      </div>
      {/* SECCIÓN 3: TABLA PRÓXIMOS 15 DÍAS */}
      <h2 className="subtitulo-seccion">Próximos 15 días</h2>
      <div className="tabla-responsive">
        <table className="tabla-turnos">
          <thead>
            <tr>
              <th>Lunes 1</th>
              <th>Martes 2</th>
              <th>Miércoles 3</th>
              <th>Jueves 4</th>
              <th>Viernes 5</th>
              <th>Sábado 6</th>
              <th>Domingo 7</th>
              <th>Lunes 8</th>
              <th>Martes 9</th>
              <th>Miércoles 10</th>
              <th>Jueves 11</th>
              <th>Viernes 12</th>
              <th>Sábado 13</th>
              <th>Domingo 14</th>
              <th>Lunes 15</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* Muestra de 5 días de trabajo y 2 de descanso (D) por semana */}
              <td className="turno-m">M</td>
              <td className="turno-m">M</td>
              <td className="turno-m">M</td>
              <td className="turno-m">M</td>
              <td className="turno-m">M</td>
              <td className="turno-d">D</td>
              <td className="turno-d">D</td>
              <td className="turno-t">T</td>
              <td className="turno-t">T</td>
              <td className="turno-t">T</td>
              <td className="turno-t">T</td>
              <td className="turno-t">T</td>
              <td className="turno-d">D</td>
              <td className="turno-d">D</td>
              <td className="turno-n">N</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* SECCIÓN 4: TABLA ÚLTIMOS 15 DÍAS */}
      <h2 className="subtitulo-seccion">Últimos 15 días</h2>
      <div className="tabla-responsive">
        <table className="tabla-turnos">
          <thead>
            <tr>
              <th>Domingo 16</th>
              <th>Lunes 17</th>
              <th>Martes 18</th>
              <th>Miércoles 19</th>
              <th>Jueves 20</th>
              <th>Viernes 21</th>
              <th>Sábado 22</th>
              <th>Domingo 23</th>
              <th>Lunes 24</th>
              <th>Martes 25</th>
              <th>Miércoles 26</th>
              <th>Jueves 27</th>
              <th>Viernes 28</th>
              <th>Sábado 29</th>
              <th>Domingo 30</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="turno-n">N</td>
              <td className="turno-n">N</td>
              <td className="turno-n">N</td>
              <td className="turno-n">N</td>
              <td className="turno-n">N</td>
              <td className="turno-d">D</td>
              <td className="turno-d">D</td>
              <td className="turno-m">M</td>
              <td className="turno-m">M</td>
              <td className="turno-m">M</td>
              <td className="turno-m">M</td>
              <td className="turno-m">M</td>
              <td className="turno-d">D</td>
              <td className="turno-d">D</td>
              <td className="turno-m">M</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</>

)
}

export default Horarios