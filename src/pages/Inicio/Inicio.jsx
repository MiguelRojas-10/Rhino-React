import './Inicio.css'
function Inicio(){
    return(

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
  <link rel="stylesheet" href="style.css" />
  <header className="header-principal">
    <div className="seccion-superior">
      <img src="LogoAmarillo.png" alt="Logo Rhino" className="logo-pequeno" />
      <nav className="seccion-navegacion">
        <a href="Principal.html" id="nav-inicio" className="nav-btn activo">
          Inicio
        </a>
        <a href="Horarios.html" id="nav-horarios" className="nav-btn">
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
    <div className="contenedor-noticias">
      <h1 className="titulo-seccion">Tablón de Anuncios</h1>
      {/* NOTICIA 1: Imagen a la Izquierda */}
      <article className="tarjeta-noticia noticia-1 img-izquierda">
        <img src="Imagen1.png" alt="Día Cívico" className="img-noticia" />
        <div className="texto-noticia">
          <h2>Jornada de Trabajo Remoto - Día Cívico</h2>
          <p>
            Estimado equipo Rhino, les informamos que el próximo viernes 14 de
            agosto ha sido declarado día cívico. Por este motivo, todo el
            personal operará bajo la modalidad de trabajo remoto (Home Office).
            Asegúrense de llevar sus equipos portátiles el jueves al finalizar
            la jornada. Los horarios de atención y reuniones programadas se
            mantendrán con total normalidad a través de nuestros canales
            virtuales.
          </p>
        </div>
      </article>
      {/* NOTICIA 2: Imagen a la Derecha */}
      <article className="tarjeta-noticia noticia-2 img-derecha">
        <img src="Imagen2.png" alt="Nueva Gerente" className="img-noticia" />
        <div className="texto-noticia">
          <h2>Bienvenida a nuestra nueva Gerente General</h2>
          <p>
            Nos complace anunciar oficialmente que, a partir del 1 de
            septiembre, Camila Mendoza asumirá el cargo de Gerente General de
            Rhino Soluciones Integrales S.A.S. Camila cuenta con más de 15 años
            de experiencia en el sector y viene a liderar nuestra próxima fase
            de expansión. La próxima semana realizaremos una reunión general de
            bienvenida en el auditorio principal.
          </p>
        </div>
      </article>
      {/* NOTICIA 3: Imagen a la Izquierda */}
      <article className="tarjeta-noticia noticia-3 img-izquierda">
        <img src="Imagen3.png" alt="Mantenimiento" className="img-noticia" />
        <div className="texto-noticia">
          <h2>Actualización del Sistema de Evaluaciones</h2>
          <p>
            El departamento de TI estará realizando una actualización mayor en
            el módulo de "Resultados de evaluación" este fin de semana. El
            sistema estará fuera de servicio desde el sábado a las 10:00 PM
            hasta el domingo a las 6:00 AM. A partir del lunes, podrán disfrutar
            de una interfaz más rápida y reportes más detallados sobre el
            desempeño mensual.
          </p>
        </div>
      </article>
    </div>
  </main>
</>
    )
}

export default Inicio 