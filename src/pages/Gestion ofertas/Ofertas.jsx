import pos1 from '../../Images/Pos1.png'
import pos2 from '../../Images/Pos2.png'
import pos3 from '../../Images/Pos3.png'
import pos4 from '../../Images/Pos4.png'
import pos5 from '../../Images/Pos5.png'
import pos6 from '../../Images/Pos6.png'

import '../../styles/common.css'
import { createElement } from 'react'
import Navbar from '../../components/Navbar.jsx'

function Ofertas() {
  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gestión de ofertas - Rhino</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
    rel="stylesheet"
  />
  {createElement(Navbar)}
  <main className="contenido-pagina">
    <div className="contenedor-ofertas">
      {/* SECCIÓN 1: FORMULARIO PARA NUEVA OFERTA */}
      <h1 className="titulo-seccion">Publicar Nueva Oferta Laboral</h1>
      <form className="tarjeta-formulario">
        <div className="grupo-input">
          <label htmlFor="cargo-oferta">Nombre del cargo:</label>
          <input
            type="text"
            id="cargo-oferta"
            className="input-brutalista"
            placeholder="Ej: Desarrollador Backend Java"
          />
        </div>
        <div className="grid-2-columnas">
          <div className="grupo-input">
            <label htmlFor="salario-oferta">Salario ofrecido:</label>
            <input
              type="text"
              id="salario-oferta"
              className="input-brutalista"
              placeholder="Ej: $ 3.500.000 COP"
            />
          </div>
          <div className="grupo-input">
            <label htmlFor="ubicacion-oferta">Ubicación:</label>
            <input
              type="text"
              id="ubicacion-oferta"
              className="input-brutalista"
              placeholder="Ej: Bogotá, Colombia (Presencial)"
            />
          </div>
        </div>
        <div className="grupo-input">
          <label htmlFor="duracion-oferta">
            Duración del contrato (Opcional):
          </label>
          <input
            type="text"
            id="duracion-oferta"
            className="input-brutalista"
            placeholder="Ej: Término indefinido"
          />
        </div>
        <div className="grupo-input">
          <label htmlFor="descripcion-oferta">
            Descripción de la vacante y requisitos:
          </label>
          <textarea
            id="descripcion-oferta"
            className="input-brutalista area-texto"
            placeholder="Detalle aquí las responsabilidades para integrarse a Rhino Soluciones Integrales S.A.S..."
            defaultValue={""}
          />
        </div>
        <button type="button" className="btn-accion-principal">
          Publicar oferta laboral
        </button>
      </form>
      {/* SECCIÓN 2: OFERTAS PUBLICADAS Y POSTULANTES */}
      <h2 className="subtitulo-seccion">Ofertas Activas y Postulantes</h2>
      <div className="lista-ofertas">
        {/* OFERTA 1 */}
        <div className="tarjeta-oferta color-fondo-1">
          <div className="cabecera-oferta">
            <div className="info-oferta-resumen">
              <h3>Ayudante de limpieza</h3>
              <span className="etiqueta-postulados">3 Postulados</span>
            </div>
            <button
              className="btn-desplegar"
              onclick="desplegarPostulantes('oferta-1')"
            >
              Ver postulados ▼
            </button>
          </div>
          {/* Lista Desplegable (Oculta por defecto) */}
          <div id="oferta-1" className="contenedor-postulantes oculto">
            <div className="tarjeta-postulante">
              <img
                src={pos1}
                alt="Foto postulante 1"
                className="foto-postulante"
              />
              <div className="datos-postulante">
                <h4>Carlos Ramírez</h4>
                <p>Experiencia: 4 años</p>
              </div>
              {/* Agrupamos los botones */}
              <div className="acciones-postulante">
                <button className="btn-cv">Ver Hoja de Vida</button>
                {/* Nuevo botón que abre el modal */}
                <button
                  className="btn-contratar"
                  onclick="abrirModalContratacion('Carlos Ramírez')"
                >
                  Contratar
                </button>
              </div>
            </div>
            <div className="tarjeta-postulante">
              <img
                src={pos2}
                alt="Foto postulante 2"
                className="foto-postulante"
              />
              <div className="datos-postulante">
                <h4>Laura Gómez</h4>
                <p>Experiencia: 6 años</p>
              </div>{" "}
              {/* Agrupamos los botones */}
              <div className="acciones-postulante">
                <button className="btn-cv">Ver Hoja de Vida</button>
                {/* Nuevo botón que abre el modal */}
                <button
                  className="btn-contratar"
                  onclick="abrirModalContratacion('Laura Gómez')"
                >
                  Contratar
                </button>
              </div>
            </div>
            <div className="tarjeta-postulante">
              <img
                src={pos3}
                alt="Foto postulante 3"
                className="foto-postulante"
              />
              <div className="datos-postulante">
                <h4>Mateo Vargas</h4>
                <p>Experiencia: 2 años</p>
              </div>{" "}
              {/* Agrupamos los botones */}
              <div className="acciones-postulante">
                <button className="btn-cv">Ver Hoja de Vida</button>
                {/* Nuevo botón que abre el modal */}
                <button
                  className="btn-contratar"
                  onclick="abrirModalContratacion('Mateo Vargas')"
                >
                  Contratar
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* OFERTA 2 */}
        <div className="tarjeta-oferta color-fondo-2">
          <div className="cabecera-oferta">
            <div className="info-oferta-resumen">
              <h3>Diseñador UX/UI</h3>
              <span className="etiqueta-postulados">3 Postulados</span>
            </div>
            <button
              className="btn-desplegar"
              onclick="desplegarPostulantes('oferta-2')"
            >
              Ver postulados ▼
            </button>
          </div>
          {/* Lista Desplegable (Oculta por defecto) */}
          <div id="oferta-2" className="contenedor-postulantes oculto">
            <div className="tarjeta-postulante">
              <img
                src={pos4}
                alt="Foto postulante 4"
                className="foto-postulante"
              />
              <div className="datos-postulante">
                <h4>Andrea Castro</h4>
                <p>Experiencia: 5 años</p>
              </div>{" "}
              {/* Agrupamos los botones */}
              <div className="acciones-postulante">
                <button className="btn-cv">Ver Hoja de Vida</button>
                {/* Nuevo botón que abre el modal */}
                <button
                  className="btn-contratar"
                  onclick="abrirModalContratacion('Andrea Castro')"
                >
                  Contratar
                </button>
              </div>
            </div>
            <div className="tarjeta-postulante">
              <img
                src={pos5}
                alt="Foto postulante 5"
                className="foto-postulante"
              />
              <div className="datos-postulante">
                <h4>Felipe Martínez</h4>
                <p>Experiencia: 3 años</p>
              </div>{" "}
              {/* Agrupamos los botones */}
              <div className="acciones-postulante">
                <button className="btn-cv">Ver Hoja de Vida</button>
                {/* Nuevo botón que abre el modal */}
                <button
                  className="btn-contratar"
                  onclick="abrirModalContratacion('Felipe Martínez')"
                >
                  Contratar
                </button>
              </div>
            </div>
            <div className="tarjeta-postulante">
              <img
                src={pos6}
                alt="Foto postulante 6"
                className="foto-postulante"
              />
              <div className="datos-postulante">
                <h4>Valentina Ruiz</h4>
                <p>Experiencia: 1 año</p>
              </div>{" "}
              {/* Agrupamos los botones */}
              <div className="acciones-postulante">
                <button className="btn-cv">Ver Hoja de Vida</button>
                {/* Nuevo botón que abre el modal */}
                <button
                  className="btn-contratar"
                  onclick="abrirModalContratacion('Valentina Ruiz')"
                >
                  Contratar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* MODAL DE CONTRATACIÓN (Oculto por defecto) */}
    <div id="modal-contratacion" className="fondo-modal oculto">
      <div className="tarjeta-modal">
        <h2 className="titulo-modal">Registrar Contratación</h2>
        <p id="texto-candidato-modal" className="subtitulo-modal">
          Candidato: <strong>Nombre</strong>
        </p>
        <form className="formulario-modal">
          <div className="grupo-input">
            <label>Fecha de ingreso:</label>
            <input type="date" className="input-brutalista" />
          </div>
          <div className="grupo-input">
            <label>Salario final acordado:</label>
            <input
              type="text"
              className="input-brutalista"
              placeholder="Ej: $ 3.500.000 COP"
            />
          </div>
          <div className="grupo-input">
            <label>Tipo de contrato:</label>
            <select className="input-brutalista">
              <option value="indefinido">Término Indefinido</option>
              <option value="fijo">Término Fijo</option>
              <option value="prestacion">Prestación de Servicios</option>
            </select>
          </div>
        </form>
        <div className="botones-modal">
          <button
            type="button"
            className="btn-cancelar"
            onclick="cerrarModal()"
          >
            Cancelar
          </button>
          <button type="button" className="btn-confirmar-contrato">
            Confirmar Registro
          </button>
        </div>
      </div>
    </div>
  </main>
</>
  )
}

export default Ofertas
