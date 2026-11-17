import { useState } from 'react'
import {
  crearResolucionSolicitud,
  toggleSolicitud,
} from '../../Script.js'
import '../../styles/common.css'

import { createElement } from 'react'
import Navbar from '../../components/Navbar.jsx'

function GestionSolicitudes() {
  const [solicitudesAbiertas, setSolicitudesAbiertas] = useState({})
  const [resolucionActual, setResolucionActual] = useState(null)
  const [estadosSolicitudes, setEstadosSolicitudes] = useState({})

  const alternarSolicitud = (idSolicitud) => {
    setSolicitudesAbiertas((actuales) =>
      toggleSolicitud(actuales, idSolicitud),
    )
  }
  const abrirResolucion = (accion, nombreEmpleado, idSolicitud) => {
    setResolucionActual(
      crearResolucionSolicitud(accion, nombreEmpleado, idSolicitud),
    )
  }
  const confirmarResolucion = () => {
    if (!resolucionActual) return
    setEstadosSolicitudes((actuales) => ({
      ...actuales,
      [resolucionActual.idSolicitud]: resolucionActual.accion,
    }))
    setResolucionActual(null)
  }
  const mostrarEstado = (idSolicitud) => {
    const accion = estadosSolicitudes[idSolicitud]
    if (!accion) return null

    const estado =
      accion === 'Aprobar'
        ? { texto: 'Aprobada', clase: 'estado-aprobada' }
        : accion === 'Rechazar'
          ? { texto: 'Rechazada', clase: 'estado-rechazada' }
          : { texto: 'En revisión', clase: 'estado-revision' }

    return (
      <span className={`estado-etiqueta ${estado.clase}`} style={{ marginLeft: 10 }}>
        {estado.texto}
      </span>
    )
  }

  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gestión de solicitudes - Rhino</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
    rel="stylesheet"
  />
  {createElement(Navbar)}
  <main className="contenido-pagina">
    <div className="contenedor-gestion-solicitudes">
      <h1 className="titulo-seccion">Gestión de Solicitudes del Personal</h1>
      {/* SECCIÓN 1: NUEVAS SOLICITUDES */}
      <h2 className="subtitulo-seccion">Nuevas Solicitudes</h2>
      <div className="lista-solicitudes">
        {/* Solicitud 1 */}
        <div className="tarjeta-solicitud">
          <div className="cabecera-solicitud-admin">
            <div className="info-resumen-admin">
              <h3>Solicitud de día de descanso (Vacaciones)</h3>
              <p className="datos-empleado-admin">
                <strong>Carlos Ramírez</strong> | 02 de Julio de 2026
                {mostrarEstado('sol-nueva-1')}
              </p>
            </div>
            <button
              className="btn-desplegar"
              onClick={() => alternarSolicitud('sol-nueva-1')}
              aria-expanded={Boolean(solicitudesAbiertas['sol-nueva-1'])}
              aria-controls="sol-nueva-1"
            >
              Ver detalles ▼
            </button>
          </div>
          <div
            id="sol-nueva-1"
            className={`contenido-solicitud ${solicitudesAbiertas['sol-nueva-1'] ? '' : 'oculto'}`}
          >
            <p className="detalle-texto-admin">
              Solicito mis 15 días de vacaciones reglamentarias correspondientes
              a este año laborado, a partir de la primera semana del próximo
              mes.
            </p>
            <p className="anexos-admin">
              <strong>Anexos:</strong>{" "}
              <a href="#">Formulario_Vacaciones_CR.pdf</a>
            </p>
            <div className="botones-resolucion">
              <button
                className="btn-aprobar"
                onClick={() => abrirResolucion('Aprobar', 'Carlos Ramírez', 'sol-nueva-1')}
              >
                Aprobar
              </button>
              <button
                className="btn-pendiente"
                onClick={() => abrirResolucion('Pendiente', 'Carlos Ramírez', 'sol-nueva-1')}
              >
                Pendiente
              </button>
              <button
                className="btn-rechazar"
                onClick={() => abrirResolucion('Rechazar', 'Carlos Ramírez', 'sol-nueva-1')}
              >
                Rechazar
              </button>
            </div>
          </div>
        </div>
        {/* Solicitud 2 */}
        <div className="tarjeta-solicitud">
          <div className="cabecera-solicitud-admin">
            <div className="info-resumen-admin">
              <h3>Solicitud de aumento</h3>
              <p className="datos-empleado-admin">
                <strong>Laura Gómez</strong> | 01 de Julio de 2026
                {mostrarEstado('sol-nueva-2')}
              </p>
            </div>
            <button
              className="btn-desplegar"
              onClick={() => alternarSolicitud('sol-nueva-2')}
              aria-expanded={Boolean(solicitudesAbiertas['sol-nueva-2'])}
              aria-controls="sol-nueva-2"
            >
              Ver detalles ▼
            </button>
          </div>
          <div
            id="sol-nueva-2"
            className={`contenido-solicitud ${solicitudesAbiertas['sol-nueva-2'] ? '' : 'oculto'}`}
          >
            <p className="detalle-texto-admin">
              De acuerdo a mi evaluación de desempeño reciente y a las nuevas
              responsabilidades adquiridas en el proyecto Rhino, solicito
              formalmente una revisión salarial.
            </p>
            <p className="anexos-admin">
              <strong>Anexos:</strong> <a href="#">Reporte_Metricas_LG.pdf</a>,{" "}
              <a href="#">Carta_Solicitud.docx</a>
            </p>
            <div className="botones-resolucion">
              <button
                className="btn-aprobar"
                onClick={() => abrirResolucion('Aprobar', 'Laura Gómez', 'sol-nueva-2')}
              >
                Aprobar
              </button>
              <button
                className="btn-pendiente"
                onClick={() => abrirResolucion('Pendiente', 'Laura Gómez', 'sol-nueva-2')}
              >
                Pendiente
              </button>
              <button
                className="btn-rechazar"
                onClick={() => abrirResolucion('Rechazar', 'Laura Gómez', 'sol-nueva-2')}
              >
                Rechazar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* SECCIÓN 2: SOLICITUDES EN REVISIÓN (PENDIENTES) */}
      <h2 className="subtitulo-seccion">En Revisión (Pendientes)</h2>
      <div className="lista-solicitudes">
        {/* Solicitud Pendiente 1 */}
        <div className="tarjeta-solicitud estado-borde-pendiente">
          <div className="cabecera-solicitud-admin">
            <div className="info-resumen-admin">
              <h3>Solicitud de cambio de horario</h3>
              <p className="datos-empleado-admin">
                <strong>Mateo Vargas</strong> | 28 de Junio de 2026{" "}
                {mostrarEstado('sol-pend-1') || (
                  <span
                    className="estado-etiqueta estado-revision"
                    style={{ marginLeft: 10 }}
                  >
                    En revisión
                  </span>
                )}
              </p>
            </div>
            <button
              className="btn-desplegar"
              onClick={() => alternarSolicitud('sol-pend-1')}
              aria-expanded={Boolean(solicitudesAbiertas['sol-pend-1'])}
              aria-controls="sol-pend-1"
            >
              Ver detalles ▼
            </button>
          </div>
          <div
            id="sol-pend-1"
            className={`contenido-solicitud ${solicitudesAbiertas['sol-pend-1'] ? '' : 'oculto'}`}
          >
            <p className="detalle-texto-admin">
              Solicito cambiar mi turno de la tarde a la mañana por motivos de
              estudio durante el próximo semestre.
            </p>
            <p className="anexos-admin">
              <strong>Anexos:</strong> <a href="#">Horario_Universidad.pdf</a>
            </p>
            <div className="caja-motivo-resolucion">
              <h4>Motivo del estado pendiente (Supervisor):</h4>
              <p>
                Estamos validando la disponibilidad de cupos en el turno de la
                mañana. Se dará respuesta la próxima semana.
              </p>
              <p>
                <strong>Anexo adjunto:</strong>{" "}
                <a href="#">Matriz_Turnos_Borrador.xlsx</a>
              </p>
            </div>
            <div className="botones-resolucion">
              <button
                className="btn-aprobar"
                onClick={() => abrirResolucion('Aprobar', 'Mateo Vargas', 'sol-pend-1')}
              >
                Aprobar
              </button>
              {/* No hay botón de pendiente porque ya está pendiente */}
              <button
                className="btn-rechazar"
                onClick={() => abrirResolucion('Rechazar', 'Mateo Vargas', 'sol-pend-1')}
              >
                Rechazar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* SECCIÓN 3: HISTORIAL (APROBADAS Y RECHAZADAS) */}
      <h2 className="subtitulo-seccion">Historial Resuelto</h2>
      <div className="lista-solicitudes">
        {/* Solicitud Aprobada */}
        <div className="tarjeta-solicitud estado-borde-aprobada">
          <div className="cabecera-solicitud-admin">
            <div className="info-resumen-admin">
              <h3>Solicitud de horas extra</h3>
              <p className="datos-empleado-admin">
                <strong>Andrea Castro</strong> | 25 de Junio de 2026{" "}
                <span
                  className="estado-etiqueta estado-aprobada"
                  style={{ marginLeft: 10 }}
                >
                  Aprobada
                </span>
              </p>
            </div>
            <button
              className="btn-desplegar"
              onClick={() => alternarSolicitud('sol-res-1')}
              aria-expanded={Boolean(solicitudesAbiertas['sol-res-1'])}
              aria-controls="sol-res-1"
            >
              Ver detalles ▼
            </button>
          </div>
          <div
            id="sol-res-1"
            className={`contenido-solicitud ${solicitudesAbiertas['sol-res-1'] ? '' : 'oculto'}`}
          >
            <p className="detalle-texto-admin">
              Autorización para realizar 6 horas extra este fin de semana.
            </p>
            <p className="anexos-admin">
              <strong>Anexos:</strong> Ninguno
            </p>
            <div className="caja-motivo-resolucion aprobada-bg">
              <h4>Resolución (Aprobada):</h4>
              <p>
                Horas aprobadas para el despliegue del servidor. Por favor
                registrar el inicio y fin en el sistema.
              </p>
            </div>
            {/* Sin botones de acción */}
          </div>
        </div>
        {/* Solicitud Rechazada */}
        <div className="tarjeta-solicitud estado-borde-rechazada">
          <div className="cabecera-solicitud-admin">
            <div className="info-resumen-admin">
              <h3>Solicitud de día de descanso (Justificado)</h3>
              <p className="datos-empleado-admin">
                <strong>Felipe Martínez</strong> | 20 de Junio de 2026{" "}
                <span
                  className="estado-etiqueta estado-rechazada"
                  style={{ marginLeft: 10 }}
                >
                  Rechazada
                </span>
              </p>
            </div>
            <button
              className="btn-desplegar"
              onClick={() => alternarSolicitud('sol-res-2')}
              aria-expanded={Boolean(solicitudesAbiertas['sol-res-2'])}
              aria-controls="sol-res-2"
            >
              Ver detalles ▼
            </button>
          </div>
          <div
            id="sol-res-2"
            className={`contenido-solicitud ${solicitudesAbiertas['sol-res-2'] ? '' : 'oculto'}`}
          >
            <p className="detalle-texto-admin">
              Solicito el viernes libre por calamidad doméstica.
            </p>
            <p className="anexos-admin">
              <strong>Anexos:</strong> Ninguno
            </p>
            <div className="caja-motivo-resolucion rechazada-bg">
              <h4>Resolución (Rechazada):</h4>
              <p>
                No se adjuntó el soporte documental requerido por recursos
                humanos para validar la calamidad. Por favor generar una nueva
                solicitud con los soportes.
              </p>
              <p>
                <strong>Anexo adjunto:</strong>{" "}
                <a href="#">Manual_Permisos_Rhino.pdf</a>
              </p>
            </div>
            {/* Sin botones de acción */}
          </div>
        </div>
      </div>
    </div>
    {/* MODAL DE RESOLUCIÓN (Oculto por defecto) */}
    <div
      id="modal-resolucion"
      className={`fondo-modal ${resolucionActual ? '' : 'oculto'}`}
    >
      <div className="tarjeta-modal">
        <h2 id="titulo-modal-resolucion" className="titulo-modal">
          {resolucionActual
            ? `${resolucionActual.accion} Solicitud`
            : 'Resolver Solicitud'}
        </h2>
        <p id="texto-candidato-resolucion" className="subtitulo-modal">
          Empleado: <strong>{resolucionActual?.nombreEmpleado || 'Nombre'}</strong>
        </p>
        <form className="formulario-modal">
          <div className="grupo-input">
            <label>Justificación de la decisión:</label>
            <textarea
              className="input-brutalista area-texto"
              style={{ minHeight: 120 }}
              placeholder="Escriba los motivos de la aprobación, rechazo o por qué queda en estado pendiente..."
              defaultValue={""}
            />
          </div>
          <div className="grupo-input">
            <label>Anexar archivo (Opcional):</label>
            <input
              type="file"
              className="input-brutalista"
              multiple=""
              accept=".pdf,.doc,.docx,.jpg,.png,.zip"
            />
          </div>
        </form>
        <div className="botones-modal">
          <button
            type="button"
            className="btn-cancelar"
            onClick={() => setResolucionActual(null)}
          >
            Cancelar
          </button>
          <button
            type="button"
            id="btn-confirmar-resolucion"
            className="btn-accion-principal"
            onClick={confirmarResolucion}
            style={
              resolucionActual?.accion === 'Aprobar'
                ? { backgroundColor: '#03923e', color: '#FFFFFF' }
                : resolucionActual?.accion === 'Rechazar'
                  ? { backgroundColor: '#D32F2F', color: '#FFFFFF' }
                  : resolucionActual?.accion === 'Pendiente'
                    ? { backgroundColor: '#F1C40F', color: '#000000' }
                    : undefined
            }
          >
            Confirmar Decisión
          </button>
        </div>
      </div>
    </div>
  </main>
</>
  )
}

export default GestionSolicitudes
