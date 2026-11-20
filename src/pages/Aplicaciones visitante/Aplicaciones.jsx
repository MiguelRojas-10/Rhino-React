import logoBlanco from '../../Images/LogoBlanco.png'
import { retirarAplicacion } from '../../Script.js'

function Aplicaciones() {
  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ANKOR - Mis Aplicaciones</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <header className="header-principal">
    <div className="seccion-superior">
      <img src={logoBlanco} alt="ANKOR Logo" className="logo-pequeno" />
      <nav className="seccion-navegacion nav-visitante">
        <a href="/ofertas-postulantes" className="nav-btn">
          Ver ofertas laborales
        </a>
        <a href="/aplicaciones-visitante" className="nav-btn activo">
          Ver aplicaciones
        </a>
      </nav>
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
  </header>
  <main className="contenido-pagina">
    <section className="contenedor-solicitudes">
      <h1 className="titulo-seccion">Ofertas a las que has Aplicado</h1>
      <div className="lista-historial" id="lista-aplicaciones">
        {/* Aplicación de Ejemplo 1 */}
        <article className="tarjeta-historial historial-1">
          <div className="cabecera-historial">
            <div>
              <h3>Desarrollador Java Junior</h3>
              <p style={{ color: "#6E7174", fontWeight: "bold", marginTop: 5 }}>
                Rhino Soluciones Integrales S.A.S
              </p>
            </div>
            <span className="estado-etiqueta estado-revision">En Revisión</span>
          </div>
          <p className="fecha-historial">Fecha de postulación: 24/08/2026</p>
          <div className="detalle-historial">
            <p>
              <strong>Hoja de vida adjunta:</strong> mi_cv_actualizado.pdf
            </p>
          </div>
          <div
            style={{
              marginTop: 15,
              display: "flex",
              justifyContent: "flex-end"
            }}
          >
            <button
              className="btn-retirar"
              onClick={(event) => retirarAplicacion(event.currentTarget)}
            >
              Retirar Aplicación
            </button>
          </div>
        </article>
        {/* Aplicación de Ejemplo 2 */}
        <article className="tarjeta-historial historial-2">
          <div className="cabecera-historial">
            <div>
              <h3>Coordinador de Almacén</h3>
              <p style={{ color: "#6E7174", fontWeight: "bold", marginTop: 5 }}>
                Logística &amp; Operaciones Ankor
              </p>
            </div>
            <span className="estado-etiqueta estado-aprobada">
              Postulación Recibida
            </span>
          </div>
          <p className="fecha-historial">Fecha de postulación: 20/08/2026</p>
          <div className="detalle-historial">
            <p>
              <strong>Hoja de vida adjunta:</strong> cv_logistica_2026.pdf
            </p>
          </div>
          <div
            style={{
              marginTop: 15,
              display: "flex",
              justifyContent: "flex-end"
            }}
          >
            <button
              className="btn-retirar"
              onClick={(event) => retirarAplicacion(event.currentTarget)}
            >
              Retirar Aplicación
            </button>
          </div>
        </article>
      </div>
    </section>
  </main>
</>
  )
}

export default Aplicaciones
