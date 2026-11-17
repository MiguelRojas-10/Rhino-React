import './Solicitudes.css'
import logoRhino from '../../Images/LogoAmarillo.png'

function Solicitudes() {
  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Solicitudes - Rhino</title>
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
        <a
          href="/solicitudes"
          id="nav-solicitudes"
          className="nav-btn activo"
        >
          Solicitudes
        </a>
        <a
          href="/gestion-solicitudes"
          id="nav-gestion-solicitudes"
          className="nav-btn"
        >
          Gestión de solicitudes
        </a>
        <a href="/resultados" id="nav-resultados" className="nav-btn">
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
    <div className="contenedor-solicitudes">
      {/* SECCIÓN 1: FORMULARIO DE NUEVA SOLICITUD */}
      <h1 className="titulo-seccion">Radicar Nueva Solicitud</h1>
      <form className="tarjeta-formulario">
        <div className="grupo-input">
          <label htmlFor="tipo-solicitud">Categoría de la solicitud:</label>
          <select id="tipo-solicitud" className="input-brutalista">
            <option value="" disabled="" selected="">
              -- Seleccione una opción --
            </option>
            <option value="horas-extra">Solicitud de horas extra</option>
            <option value="vacaciones">
              Solicitud de día de descanso (Vacaciones)
            </option>
            <option value="justificado">
              Solicitud de día de descanso (Justificado)
            </option>
            <option value="aumento">Solicitud de aumento</option>
            <option value="ascenso">Solicitud de ascenso</option>
            <option value="renuncia">Anuncio de renuncia</option>
            <option value="cambio-horario">
              Solicitud de cambio de horario
            </option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="grupo-input">
          <label htmlFor="detalle-solicitud">
            Detalles de la solicitud (Máximo 1000 caracteres):
          </label>
          {/* El atributo maxlength="1000" restringe nativamente al usuario a no escribir más de esa cantidad */}
          <textarea
            id="detalle-solicitud"
            className="input-brutalista area-texto"
            maxLength={1000}
            placeholder="Escriba aquí los motivos o detalles de su solicitud..."
            defaultValue={""}
          />
        </div>
        {/* NUEVO CAMPO: ANEXOS */}
        <div className="grupo-input">
          <label htmlFor="anexos-solicitud">
            Documentos anexos (Opcional):
          </label>
          {/* Permite múltiples archivos y restringe a formatos comunes de oficina */}
          <input
            type="file"
            id="anexos-solicitud"
            className="input-brutalista"
            multiple=""
            accept=".pdf,.doc,.docx,.jpg,.png,.zip"
          />
        </div>
        {/* Un botón del tipo "button" para que no recargue la página en nuestra maqueta */}
        <button type="button" className="btn-enviar-solicitud">
          Radicar solicitud
        </button>
      </form>
      {/* SECCIÓN 2: HISTORIAL DE SOLICITUDES */}
      <h2 className="subtitulo-seccion">Mis Solicitudes Anteriores</h2>
      <div className="lista-historial">
        {/* Solicitud Anterior 1 */}
        <div className="tarjeta-historial historial-1">
          <div className="cabecera-historial">
            <h3>Solicitud de día de descanso (Vacaciones)</h3>
            <span className="estado-etiqueta estado-revision">En revisión</span>
          </div>
          <p className="fecha-historial">
            <strong>Fecha de radicado:</strong> 01 de Julio de 2026 - 14:30 hrs
          </p>
          <p className="detalle-historial">
            Solicito mis 15 días de vacaciones reglamentarias correspondientes a
            este año laborado, a partir de la primera semana del próximo mes.
          </p>
        </div>
        {/* Solicitud Anterior 2 */}
        <div className="tarjeta-historial historial-2">
          <div className="cabecera-historial">
            <h3>Solicitud de horas extra</h3>
            <span className="estado-etiqueta estado-aprobada">Aprobada</span>
          </div>
          <p className="fecha-historial">
            <strong>Fecha de radicado:</strong> 15 de Junio de 2026 - 09:15 hrs
          </p>
          <p className="detalle-historial">
            Solicitud de autorización para realizar 4 horas extra este fin de
            semana con el fin de culminar la documentación técnica del nuevo
            módulo del sistema.
          </p>
        </div>
      </div>
    </div>
  </main>
</>
  )
}

export default Solicitudes
