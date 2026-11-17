import './Postulates.css'
import logoBlanco from '../../Images/LogoBlanco.png'

function Postulantes() {
  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ANKOR - Ofertas Laborales</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <header className="header-principal">
    <div className="seccion-superior">
      <img src={logoBlanco} alt="ANKOR Logo" className="logo-pequeno" />
      <nav className="seccion-navegacion nav-visitante">
        <a href="/ofertas-postulantes" className="nav-btn activo">
          Ver ofertas laborales
        </a>
        <a href="/aplicaciones-visitante" className="nav-btn">
          Ver aplicaciones
        </a>
      </nav>
      <div className="contenedor-perfil">
        <div className="contenedor-perfil">
          <div className="info-usuario">
            <span className="nombre">Modo Visitante</span>
            <span className="rol">Explorador de Empleo</span>
          </div>
          <a href="/" className="btn-volver-inicio">
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  </header>
  <main className="contenido-pagina">
    <section className="contenedor-ofertas">
      <h1 className="titulo-seccion">Convocatorias de Empleo Abiertas</h1>
      <article className="tarjeta-formulario">
        <h2 className="subtitulo-seccion">Encuentra tu próxima oportunidad</h2>
        <p style={{ color: "#6E7174", lineHeight: "1.6" }}>
          Bienvenido a nuestra bolsa de empleo. Aquí podrás consultar los cargos
          disponibles en nuestras distintas empresas aliadas, conocer los
          requisitos detallados, revisar los esquemas de horarios y enviar tu
          postulación directamente adjuntando tu hoja de vida.
        </p>
      </article>
      <div className="lista-ofertas">
        {/* Oferta 1: Rhino Soluciones Integrales S.A.S */}
        <article className="tarjeta-oferta color-fondo-1">
          <div className="cabecera-oferta">
            <div className="info-oferta-resumen">
              <h3>Desarrollador Java Junior</h3>
              <p style={{ color: "#6E7174", fontWeight: "bold" }}>
                Rhino Soluciones Integrales S.A.S
              </p>
            </div>
            <div className="acciones-postulante">
              <button
                className="btn-desplegar"
                onclick="toggleDetalleOferta('oferta-1')"
              >
                Más información
              </button>
              <button
                className="btn-contratar"
                onclick="abrirModalAplicar('Desarrollador Java Junior')"
              >
                Aplicar
              </button>
            </div>
          </div>
          <div id="oferta-1" className="contenido-solicitud oculto">
            <div className="grupo-input">
              <label>Descripción Breve:</label>
              <p className="detalle-texto-admin">
                Buscamos un desarrollador Junior entusiasta para integrarse al
                equipo de backend en Java.
              </p>
            </div>
            <div className="grupo-input">
              <label>Descripción Detallada:</label>
              <p className="detalle-texto-admin">
                El candidato seleccionado trabajará en la construcción y
                mantenimiento de módulos empresariales, apoyando en la creación
                de servicios web, optimización de consultas SQL y corrección de
                incidencias reportadas en el entorno de desarrollo.
              </p>
            </div>
            <div className="grupo-input">
              <label>Requisitos:</label>
              <p className="detalle-texto-admin">
                • Ser mayor de edad.
                <br />• Conocimientos en Java (POO), MySQL y control de
                versiones con Git.
                <br />• Capacidad de trabajo en equipo.
              </p>
            </div>
            <div className="grupo-input">
              <label>Horarios:</label>
              <p className="detalle-texto-admin">
                Lunes a Viernes de 8:00 AM a 5:00 PM (Fijo).
              </p>
            </div>
            <div className="grupo-input">
              <label>Cantidad de empleados solicitada:</label>
              <p className="detalle-texto-admin">1 vacante.</p>
            </div>
          </div>
        </article>
        {/* Oferta 2: Rhino Soluciones Integrales S.A.S */}
        <article className="tarjeta-oferta color-fondo-2">
          <div className="cabecera-oferta">
            <div className="info-oferta-resumen">
              <h3>Analista de Soporte Técnico</h3>
              <p style={{ color: "#6E7174", fontWeight: "bold" }}>
                Rhino Soluciones Integrales S.A.S
              </p>
            </div>
            <div className="acciones-postulante">
              <button
                className="btn-desplegar"
                onclick="toggleDetalleOferta('oferta-2')"
              >
                Más información
              </button>
              <button
                className="btn-contratar"
                onclick="abrirModalAplicar('Analista de Soporte Técnico')"
              >
                Aplicar
              </button>
            </div>
          </div>
          <div id="oferta-2" className="contenido-solicitud oculto">
            <div className="grupo-input">
              <label>Descripción Breve:</label>
              <p className="detalle-texto-admin">
                Soporte en sitio y remoto para infraestructura tecnológica
                interna.
              </p>
            </div>
            <div className="grupo-input">
              <label>Descripción Detallada:</label>
              <p className="detalle-texto-admin">
                Encargado de solucionar fallas de hardware, configuración de
                periféricos, mantenimiento predictivo de equipos y asistencia
                directa a colaboradores de la organización.
              </p>
            </div>
            <div className="grupo-input">
              <label>Requisitos:</label>
              <p className="detalle-texto-admin">
                • Ser mayor de edad.
                <br />• Técnico o tecnólogo en sistemas o redes.
                <br />• Manejo de Linux (Ubuntu) y Windows Server.
              </p>
            </div>
            <div className="grupo-input">
              <label>Horarios (Rotativo):</label>
              <p className="detalle-texto-admin">
                Turnos variables: Lunes a Miércoles (6:00 AM a 2:00 PM), Jueves
                y Viernes (2:00 PM a 10:00 PM).
              </p>
            </div>
            <div className="grupo-input">
              <label>Cantidad de empleados solicitada:</label>
              <p className="detalle-texto-admin">2 vacantes.</p>
            </div>
          </div>
        </article>
        {/* Oferta 3: Logística & Operaciones Ankor */}
        <article className="tarjeta-oferta color-fondo-1">
          <div className="cabecera-oferta">
            <div className="info-oferta-resumen">
              <h3>Coordinador de Almacén</h3>
              <p style={{ color: "#6E7174", fontWeight: "bold" }}>
                Logística &amp; Operaciones Ankor
              </p>
            </div>
            <div className="acciones-postulante">
              <button
                className="btn-desplegar"
                onclick="toggleDetalleOferta('oferta-3')"
              >
                Más información
              </button>
              <button
                className="btn-contratar"
                onclick="abrirModalAplicar('Coordinador de Almacén')"
              >
                Aplicar
              </button>
            </div>
          </div>
          <div id="oferta-3" className="contenido-solicitud oculto">
            <div className="grupo-input">
              <label>Descripción Breve:</label>
              <p className="detalle-texto-admin">
                Supervisión de inventarios y gestión de despachos de mercadería.
              </p>
            </div>
            <div className="grupo-input">
              <label>Descripción Detallada:</label>
              <p className="detalle-texto-admin">
                Responsable del control de entrada y salida de insumos,
                auditorías de stock, organización de bodega y comunicación con
                proveedores de transporte.
              </p>
            </div>
            <div className="grupo-input">
              <label>Requisitos:</label>
              <p className="detalle-texto-admin">
                • Ser mayor de edad.
                <br />• Experiencia mínima de 1 año en gestión de inventarios.
                <br />• Manejo de herramientas ofimáticas (Excel intermedio).
              </p>
            </div>
            <div className="grupo-input">
              <label>Horarios:</label>
              <p className="detalle-texto-admin">
                Lunes a Sábado de 7:00 AM a 4:00 PM (Fijo).
              </p>
            </div>
            <div className="grupo-input">
              <label>Cantidad de empleados solicitada:</label>
              <p className="detalle-texto-admin">1 vacante.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
  {/* Ventana Emergente (Modal) para Aplicar */}
  <div id="modal-aplicar" className="fondo-modal oculto">
    <div className="tarjeta-modal">
      <h2 className="titulo-modal">Postularse a la Oferta</h2>
      <p className="subtitulo-modal" id="nombre-oferta-modal">
        Cargo seleccionado
      </p>
      <form className="formulario-modal" onsubmit="enviarAplicacion(event)">
        <div className="grupo-input">
          <label>Nombre Completo:</label>
          <input
            type="text"
            className="input-brutalista"
            required=""
            placeholder="Ej: Juan Pérez"
          />
        </div>
        <div className="grupo-input">
          <label>Correo Electrónico:</label>
          <input
            type="text"
            className="input-brutalista"
            required=""
            placeholder="correo@ejemplo.com"
          />
        </div>
        <div className="grupo-input">
          <label>Adjuntar Hoja de Vida (PDF):</label>
          <input
            type="file"
            className="input-brutalista"
            accept=".pdf,.doc,.docx"
            required=""
          />
        </div>
        <div className="botones-modal">
          <button
            type="button"
            className="btn-cancelar"
            onclick="cerrarModalAplicar()"
          >
            Cancelar
          </button>
          <button type="submit" className="btn-confirmar-contrato">
            Enviar Postulación
          </button>
        </div>
      </form>
    </div>
  </div>
</>
  )
}

export default Postulantes
