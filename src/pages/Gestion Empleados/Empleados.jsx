import logoRhino from '../../Images/LogoAmarillo.png'

function Empleados() {
  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Inicio - Rhino</title>
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
        <a href="/empleados" id="nav-personal" className="nav-btn activo">
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
    <div className="contenedor-personal">
      {/* SECCIÓN 1: BUSCADOR Y PERFIL */}
      <h1 className="titulo-seccion">Consultar / Editar Personal</h1>
      <div className="tarjeta-busqueda">
        <input
          type="text"
          id="buscador-cedula"
          className="input-brutalista"
          placeholder="Buscar por documento (Ej: 1111111111)"
        />
        <button className="btn-buscar" onclick="buscarEmpleado()">
          Buscar
        </button>
      </div>
      {/* Tarjeta de Perfil del Empleado (Oculta por defecto) */}
      <div id="perfil-empleado" className="tarjeta-perfil oculto">
        <div className="cabecera-perfil">
          <img
            id="perfil-foto-preview"
            src=""
            alt="Foto Empleado"
            className="foto-perfil-gigante"
          />
          {/* Estadísticas de horas (No editables) */}
          <div className="caja-horas">
            <h3>Horas Trabajadas (Mes Actual)</h3>
            <div className="grid-horas-perfil">
              <p>
                Normales: <strong id="perfil-h-normales">0</strong>
              </p>
              <p>
                Extra: <strong id="perfil-h-extra">0</strong>
              </p>
              <p>
                Rec. Nocturno: <strong id="perfil-h-nocturno">0</strong>
              </p>
              <p>
                Extra Recargo: <strong id="perfil-h-extra-noc">0</strong>
              </p>
            </div>
          </div>
        </div>
        <form id="form-edicion-perfil" className="formulario-perfil">
          <h3 className="subtitulo-interno">Datos Personales</h3>
          <div className="grid-2-columnas">
            <div className="grupo-input">
              <label>Nombres:</label>
              <input
                type="text"
                id="perfil-nombres"
                className="input-brutalista edit-field"
                disabled=""
              />
            </div>
            <div className="grupo-input">
              <label>Apellidos:</label>
              <input
                type="text"
                id="perfil-apellidos"
                className="input-brutalista edit-field"
                disabled=""
              />
            </div>
            <div className="grupo-input">
              <label>Tipo de Documento:</label>
              <select
                id="perfil-tipo-doc"
                className="input-brutalista edit-field"
                disabled=""
              >
                <option value="CC">Cédula de Ciudadanía (CC)</option>
                <option value="CE">Cédula de Extranjería (CE)</option>
                <option value="PAS">Pasaporte</option>
              </select>
            </div>
            <div className="grupo-input">
              <label>Número de Documento:</label>
              <input
                type="text"
                id="perfil-documento"
                className="input-brutalista edit-field"
                disabled=""
              />
            </div>
            <div className="grupo-input">
              <label>Fecha de Nacimiento:</label>
              <input
                type="date"
                id="perfil-nacimiento"
                className="input-brutalista edit-field"
                disabled=""
              />
            </div>
          </div>
          <h3 className="subtitulo-interno">Datos de Contacto</h3>
          <div className="grid-2-columnas">
            <div className="grupo-input">
              <label>Correo Electrónico:</label>
              <input
                type="email"
                id="perfil-correo"
                className="input-brutalista edit-field"
                disabled=""
              />
            </div>
            <div className="grupo-input">
              <label>Número de Teléfono:</label>
              <input
                type="text"
                id="perfil-telefono"
                className="input-brutalista edit-field"
                disabled=""
              />
            </div>
          </div>
          <h3 className="subtitulo-interno">Gestión Documental</h3>
          <div className="grid-2-columnas">
            <div className="grupo-input">
              <label>Actualizar Foto de Perfil:</label>
              <input
                type="file"
                className="input-brutalista edit-field"
                accept="image/*"
                disabled=""
              />
            </div>
            <div className="grupo-input">
              <label>Documento de Identidad (PDF):</label>
              <input
                type="file"
                className="input-brutalista edit-field"
                accept=".pdf"
                disabled=""
              />
            </div>
            <div className="grupo-input">
              <label>Certificaciones (PDF/ZIP):</label>
              <input
                type="file"
                className="input-brutalista edit-field"
                disabled=""
              />
            </div>
            <div className="grupo-input">
              <label>Hoja de Vida (Word/PDF):</label>
              <input
                type="file"
                className="input-brutalista edit-field"
                disabled=""
              />
            </div>
            {/* NUEVO CAMPO: ANEXOS (Solo visible en consulta/edición) */}
            <div className="grupo-input">
              <label>Anexos (Incapacidades, actas, etc.):</label>
              <input
                type="file"
                className="input-brutalista edit-field"
                multiple=""
                disabled=""
              />
            </div>
          </div>
          <div className="botones-perfil">
            {/* Botones de vista */}
            <button
              type="button"
              id="btn-habilitar-edicion"
              className="btn-editar"
              onclick="habilitarEdicion()"
            >
              Editar Datos
            </button>
            <button
              type="button"
              id="btn-eliminar"
              className="btn-eliminar"
              onclick="eliminarEmpleado()"
            >
              Eliminar Empleado
            </button>
            {/* Botones de edición (Ocultos por defecto) */}
            <button
              type="button"
              id="btn-guardar-edicion"
              className="btn-guardar oculto"
              onclick="guardarEdicion()"
            >
              Guardar Cambios
            </button>
            <button
              type="button"
              id="btn-cancelar-edicion"
              className="btn-cancelar oculto"
              onclick="cancelarEdicion()"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
      {/* SECCIÓN 2: AGREGAR NUEVO EMPLEADO */}
      <h2 className="subtitulo-seccion">Registrar Nuevo Empleado</h2>
      <div className="tarjeta-formulario">
        <form>
          <div className="grid-2-columnas">
            <div className="grupo-input">
              <label>Nombres:</label>
              <input
                type="text"
                className="input-brutalista"
                placeholder="Ej: Juan Pablo"
              />
            </div>
            <div className="grupo-input">
              <label>Apellidos:</label>
              <input
                type="text"
                className="input-brutalista"
                placeholder="Ej: Rodríguez"
              />
            </div>
            <div className="grupo-input">
              <label>Tipo de Documento:</label>
              <select className="input-brutalista">
                <option value="CC">Cédula de Ciudadanía (CC)</option>
                <option value="CE">Cédula de Extranjería (CE)</option>
                <option value="PAS">Pasaporte</option>
              </select>
            </div>
            <div className="grupo-input">
              <label>Número de Documento:</label>
              <input
                type="text"
                className="input-brutalista"
                placeholder="Ej: 1020304050"
              />
            </div>
            <div className="grupo-input">
              <label>Fecha de Nacimiento:</label>
              <input type="date" className="input-brutalista" />
            </div>
            <div className="grupo-input">
              <label>Correo Electrónico:</label>
              <input
                type="email"
                className="input-brutalista"
                placeholder="ejemplo@rhinosas.com.co"
              />
            </div>
            <div className="grupo-input">
              <label>Número de Teléfono:</label>
              <input
                type="text"
                className="input-brutalista"
                placeholder="Ej: 3001234567"
              />
            </div>
          </div>
          <h3 className="subtitulo-interno" style={{ marginTop: 20 }}>
            Carga de Archivos Iniciales
          </h3>
          <div className="grid-2-columnas">
            <div className="grupo-input">
              <label>Foto de Perfil:</label>
              <input
                type="file"
                className="input-brutalista"
                accept="image/*"
              />
            </div>
            <div className="grupo-input">
              <label>Documento de Identidad (PDF):</label>
              <input type="file" className="input-brutalista" accept=".pdf" />
            </div>
            <div className="grupo-input">
              <label>Certificaciones (PDF/ZIP):</label>
              <input type="file" className="input-brutalista" />
            </div>
            <div className="grupo-input">
              <label>Hoja de Vida (Word/PDF):</label>
              <input type="file" className="input-brutalista" />
            </div>
          </div>
          <button
            type="button"
            className="btn-accion-principal"
            style={{ marginTop: 30 }}
          >
            Registrar Empleado en el Sistema
          </button>
        </form>
      </div>
    </div>
  </main>
</>
  )
}

export default Empleados
