import { useState } from 'react'
import logoRhino from '../../Images/LogoAmarillo.png'
import pos1 from '../../Images/Pos1.png'
import pos2 from '../../Images/Pos2.png'
import pos3 from '../../Images/Pos3.png'
import pos4 from '../../Images/Pos4.png'
import pos5 from '../../Images/Pos5.png'
import pos6 from '../../Images/Pos6.png'
import { obtenerEmpleadoPorId } from '../../Script.js'
import './Gestion_horarios.css'

function GestionHorarios() {
  const [empleadoTurnoId, setEmpleadoTurnoId] = useState('')
  const [fechaTurno, setFechaTurno] = useState('')
  const [turno, setTurno] = useState('Mañana (M)')
  const [asignaciones, setAsignaciones] = useState([])
  const [empleadoHorasId, setEmpleadoHorasId] = useState('none')
  const [inicioHoras, setInicioHoras] = useState('')
  const [finHoras, setFinHoras] = useState('')
  const [registrosHoras, setRegistrosHoras] = useState([])
  const [errorHoras, setErrorHoras] = useState('')
  const [mensajeHoras, setMensajeHoras] = useState('')

  const empleados = [
    { id: '1', nombre: 'Carlos Ramírez' },
    { id: '2', nombre: 'Laura Gómez' },
    { id: '3', nombre: 'Mateo Vargas' },
    { id: '4', nombre: 'Andrea Castro' },
    { id: '5', nombre: 'Felipe Martínez' },
    { id: '6', nombre: 'Valentina Ruiz' },
  ]
  const imagenesEmpleados = [pos1, pos2, pos3, pos4, pos5, pos6]
  const empleadoHoras = obtenerEmpleadoPorId(empleadoHorasId)
  const horasRegistradas = registrosHoras
    .filter((registro) => registro.empleadoId === empleadoHorasId)
    .reduce((total, registro) => total + registro.horas, 0)

  const guardarAsignacion = (event) => {
    event.preventDefault()
    const empleado = obtenerEmpleadoPorId(empleadoTurnoId)
    if (!empleado || !fechaTurno) return

    setAsignaciones((actuales) => [
      ...actuales,
      {
        empleado: `${empleado.nombres} ${empleado.apellidos}`,
        fecha: fechaTurno,
        turno,
      },
    ])
    setFechaTurno('')
  }

  const registrarHoras = (event) => {
    event.preventDefault()
    setErrorHoras('')
    setMensajeHoras('')

    const empleado = obtenerEmpleadoPorId(empleadoHorasId)
    const horas = (new Date(finHoras).getTime() - new Date(inicioHoras).getTime()) / 3600000
    if (!empleado || !Number.isFinite(horas) || horas <= 0) {
      setErrorHoras('Seleccione un empleado y un intervalo de horas válido.')
      return
    }

    setRegistrosHoras((actuales) => [
      ...actuales,
      { empleadoId: empleadoHorasId, horas },
    ])
    setInicioHoras('')
    setFinHoras('')
    setMensajeHoras(`Se registraron ${horas.toFixed(2)} horas para ${empleado.nombres}.`)
  }

  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gestión de Horarios - Rhino</title>
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
        {/* Links estándar, recuerda marcar "activo" en esta página */}
        <a href="/inicio" id="nav-inicio" className="nav-btn">
          Inicio
        </a>
        <a href="/horarios" id="nav-horarios" className="nav-btn">
          Horarios
        </a>
        <a
          href="/gestion-horarios"
          id="nav-gestion-horarios"
          className="nav-btn activo"
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
        <a href="/" className="btn-cerrar-sesion">
          Cerrar sesión
        </a>
      </div>
    </div>
  </header>
  <main className="contenido-pagina">
    <div className="contenedor-gestion">
      {/* SECCIÓN 1: ASIGNAR TURNO */}
      <h1 className="titulo-seccion">Registrar Turno por Día</h1>
      <form className="tarjeta-formulario" onSubmit={guardarAsignacion}>
        <div className="grid-3-columnas">
          <div className="grupo-input">
            <label htmlFor="empleado-turno">Empleado:</label>
            <select
              id="empleado-turno"
              className="input-brutalista"
              value={empleadoTurnoId}
              onChange={(event) => setEmpleadoTurnoId(event.target.value)}
              required
            >
              <option value="">-- Seleccione empleado --</option>
              {empleados.map((empleado) => (
                <option key={empleado.id} value={empleado.id}>
                  {empleado.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="grupo-input">
            <label htmlFor="fecha-turno">Seleccionar día:</label>
            <input
              id="fecha-turno"
              type="date"
              className="input-brutalista"
              value={fechaTurno}
              onChange={(event) => setFechaTurno(event.target.value)}
              required
            />
          </div>
          <div className="grupo-input">
            <label htmlFor="turno">Turno:</label>
            <select
              id="turno"
              className="input-brutalista"
              value={turno}
              onChange={(event) => setTurno(event.target.value)}
            >
              <option>Mañana (M)</option>
              <option>Tarde (T)</option>
              <option>Noche (N)</option>
              <option>Descanso (D)</option>
            </select>
          </div>
        </div>
        <button className="btn-accion-principal" type="submit">
          Guardar Asignación
        </button>
        {asignaciones.length > 0 && (
          <div className="lista-historial" aria-live="polite">
            {asignaciones.map((asignacion, index) => (
              <p key={`${asignacion.fecha}-${index}`}>
                {asignacion.empleado} — {asignacion.fecha} — {asignacion.turno}
              </p>
            ))}
          </div>
        )}
      </form>
      {/* SECCIÓN 2: HORARIO GLOBAL (15 DÍAS) */}
      <h2 className="subtitulo-seccion">Horario Global - Próximos 15 días</h2>
      <div className="tabla-responsive">
        <table className="tabla-gestion">
          <thead>
            <tr>
              <th className="bg-titulo">Turno</th>
              <th className="bg-titulo">Lunes 15</th>
              <th className="bg-titulo">Martes 16</th>
              <th className="bg-titulo">Miércoles 17</th>
              <th className="bg-titulo">Jueves 18</th>
              <th className="bg-titulo">Viernes 19</th>
              <th className="bg-titulo">Sábado 20</th>
              <th className="bg-titulo">Domingo 21</th>
              <th className="bg-titulo">Lunes 22</th>
              <th className="bg-titulo">Martes 23</th>
              <th className="bg-titulo">Miércoles 24</th>
              <th className="bg-titulo">Jueves 25</th>
              <th className="bg-titulo">Viernes 26</th>
              <th className="bg-titulo">Sábado 27</th>
              <th className="bg-titulo">Domingo 28</th>
              <th className="bg-titulo">Lunes 29</th>
            </tr>
          </thead>
          <tbody>
            {/* FILA MAÑANA */}
            <tr>
              <td className="bg-manana">Mañana</td>
              <td>
                C. Ramírez
                <br />
                L. Gómez
                <br />
                M. Vargas
              </td>
              <td>
                A. Castro
                <br />
                F. Martínez
                <br />
                V. Ruiz
              </td>
              <td>
                C. Ramírez
                <br />
                L. Gómez
                <br />
                M. Vargas
              </td>
              <td>
                A. Castro
                <br />
                F. Martínez
                <br />
                V. Ruiz
              </td>
              <td>
                C. Ramírez
                <br />
                L. Gómez
                <br />
                M. Vargas
              </td>
              <td>
                A. Castro
                <br />
                F. Martínez
                <br />
                V. Ruiz
              </td>
              <td>
                C. Ramírez
                <br />
                L. Gómez
                <br />
                M. Vargas
              </td>
              <td>
                A. Castro
                <br />
                F. Martínez
                <br />
                V. Ruiz
              </td>
              <td>
                C. Ramírez
                <br />
                L. Gómez
                <br />
                M. Vargas
              </td>
              <td>
                A. Castro
                <br />
                F. Martínez
                <br />
                V. Ruiz
              </td>
              <td>
                C. Ramírez
                <br />
                L. Gómez
                <br />
                M. Vargas
              </td>
              <td>
                A. Castro
                <br />
                F. Martínez
                <br />
                V. Ruiz
              </td>
              <td>
                C. Ramírez
                <br />
                L. Gómez
                <br />
                M. Vargas
              </td>
              <td>
                A. Castro
                <br />
                F. Martínez
                <br />
                V. Ruiz
              </td>
              <td>
                C. Ramírez
                <br />
                L. Gómez
                <br />
                M. Vargas
              </td>
            </tr>
            {/* FILA TARDE */}
            <tr>
              <td className="bg-tarde">Tarde</td>
              <td>
                A. Castro
                <br />
                F. Martínez
                <br />
                V. Ruiz
              </td>
              <td>
                C. Ramírez
                <br />
                L. Gómez
                <br />
                M. Vargas
              </td>
              <td>
                A. Castro
                <br />
                F. Martínez
                <br />
                V. Ruiz
              </td>
              <td>
                C. Ramírez
                <br />
                L. Gómez
                <br />
                M. Vargas
              </td>
              <td>
                A. Castro
                <br />
                F. Martínez
                <br />
                V. Ruiz
              </td>
              <td>
                C. Ramírez
                <br />
                L. Gómez
                <br />
                M. Vargas
              </td>
              <td>
                A. Castro
                <br />
                F. Martínez
                <br />
                V. Ruiz
              </td>
              <td>
                C. Ramírez
                <br />
                L. Gómez
                <br />
                M. Vargas
              </td>
              <td>
                A. Castro
                <br />
                F. Martínez
                <br />
                V. Ruiz
              </td>
              <td>
                C. Ramírez
                <br />
                L. Gómez
                <br />
                M. Vargas
              </td>
              <td>
                A. Castro
                <br />
                F. Martínez
                <br />
                V. Ruiz
              </td>
              <td>
                C. Ramírez
                <br />
                L. Gómez
                <br />
                M. Vargas
              </td>
              <td>
                A. Castro
                <br />
                F. Martínez
                <br />
                V. Ruiz
              </td>
              <td>
                C. Ramírez
                <br />
                L. Gómez
                <br />
                M. Vargas
              </td>
              <td>
                A. Castro
                <br />
                F. Martínez
                <br />
                V. Ruiz
              </td>
            </tr>
            {/* FILA NOCHE */}
            <tr>
              <td className="bg-noche">Noche</td>
              <td>
                M. Vargas
                <br />
                C. Ramírez
                <br />
                A. Castro
              </td>
              <td>
                F. Martínez
                <br />
                V. Ruiz
                <br />
                L. Gómez
              </td>
              <td>
                M. Vargas
                <br />
                C. Ramírez
                <br />
                A. Castro
              </td>
              <td>
                F. Martínez
                <br />
                V. Ruiz
                <br />
                L. Gómez
              </td>
              <td>
                M. Vargas
                <br />
                C. Ramírez
                <br />
                A. Castro
              </td>
              <td>
                F. Martínez
                <br />
                V. Ruiz
                <br />
                L. Gómez
              </td>
              <td>
                M. Vargas
                <br />
                C. Ramírez
                <br />
                A. Castro
              </td>
              <td>
                F. Martínez
                <br />
                V. Ruiz
                <br />
                L. Gómez
              </td>
              <td>
                M. Vargas
                <br />
                C. Ramírez
                <br />
                A. Castro
              </td>
              <td>
                F. Martínez
                <br />
                V. Ruiz
                <br />
                L. Gómez
              </td>
              <td>
                M. Vargas
                <br />
                C. Ramírez
                <br />
                A. Castro
              </td>
              <td>
                F. Martínez
                <br />
                V. Ruiz
                <br />
                L. Gómez
              </td>
              <td>
                M. Vargas
                <br />
                C. Ramírez
                <br />
                A. Castro
              </td>
              <td>
                F. Martínez
                <br />
                V. Ruiz
                <br />
                L. Gómez
              </td>
              <td>
                M. Vargas
                <br />
                C. Ramírez
                <br />
                A. Castro
              </td>
            </tr>
            {/* FILA DESCANSO */}
            <tr>
              <td className="bg-descanso">Descanso</td>
              <td>
                V. Ruiz
                <br />
                L. Gómez
                <br />
                F. Martínez
              </td>
              <td>
                M. Vargas
                <br />
                C. Ramírez
                <br />
                A. Castro
              </td>
              <td>
                V. Ruiz
                <br />
                L. Gómez
                <br />
                F. Martínez
              </td>
              <td>
                M. Vargas
                <br />
                C. Ramírez
                <br />
                A. Castro
              </td>
              <td>
                V. Ruiz
                <br />
                L. Gómez
                <br />
                F. Martínez
              </td>
              <td>
                M. Vargas
                <br />
                C. Ramírez
                <br />
                A. Castro
              </td>
              <td>
                V. Ruiz
                <br />
                L. Gómez
                <br />
                F. Martínez
              </td>
              <td>
                M. Vargas
                <br />
                C. Ramírez
                <br />
                A. Castro
              </td>
              <td>
                V. Ruiz
                <br />
                L. Gómez
                <br />
                F. Martínez
              </td>
              <td>
                M. Vargas
                <br />
                C. Ramírez
                <br />
                A. Castro
              </td>
              <td>
                V. Ruiz
                <br />
                L. Gómez
                <br />
                F. Martínez
              </td>
              <td>
                M. Vargas
                <br />
                C. Ramírez
                <br />
                A. Castro
              </td>
              <td>
                V. Ruiz
                <br />
                L. Gómez
                <br />
                F. Martínez
              </td>
              <td>
                M. Vargas
                <br />
                C. Ramírez
                <br />
                A. Castro
              </td>
              <td>
                V. Ruiz
                <br />
                L. Gómez
                <br />
                F. Martínez
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* SECCIÓN 3: REGISTRO HORAS EXTRA */}
      <h2 className="subtitulo-seccion">Registro de Horas Extra</h2>
      <div className="tarjeta-formulario">
        <div className="selector-empleado">
          <label htmlFor="select-empleado">Seleccionar Empleado:</label>
          <select
            id="select-empleado"
            className="input-brutalista"
            value={empleadoHorasId}
            onChange={(event) => {
              setEmpleadoHorasId(event.target.value)
              setErrorHoras('')
              setMensajeHoras('')
            }}
          >
            <option value="none">-- Seleccione empleado --</option>
            {empleados.map((empleado) => (
              <option key={empleado.id} value={empleado.id}>
                {empleado.nombre}
              </option>
            ))}
          </select>
        </div>
        {empleadoHoras && (
        <div className="info-empleado-container">
          <img
            src={imagenesEmpleados[Number(empleadoHorasId) - 1]}
            alt="Foto"
            className="foto-empleado-grande"
          />
          <div className="stats-empleado">
            <p>
              Horas Extra: <span>{empleadoHoras.hExtra + horasRegistradas}</span>
            </p>
            <p>
              Recargo Nocturno: <span>{empleadoHoras.hNocturno}</span>
            </p>
            <p>
              Extra Nocturno: <span>{empleadoHoras.hExtraNoc}</span>
            </p>
          </div>
          <form className="inputs-tiempo" onSubmit={registrarHoras}>
            <label htmlFor="inicio-horas">Inicio:</label>
            <input
              id="inicio-horas"
              type="datetime-local"
              className="input-brutalista"
              value={inicioHoras}
              onChange={(event) => setInicioHoras(event.target.value)}
              required
            />
            <label htmlFor="fin-horas">Fin:</label>
            <input
              id="fin-horas"
              type="datetime-local"
              className="input-brutalista"
              value={finHoras}
              onChange={(event) => setFinHoras(event.target.value)}
              required
            />
            <button
              className="btn-accion-principal"
              type="submit"
              style={{ marginTop: 0 }}
            >
              Registrar
            </button>
            {errorHoras && <p role="alert">{errorHoras}</p>}
            {mensajeHoras && <p role="status">{mensajeHoras}</p>}
          </form>
        </div>
        )}
      </div>
    </div>
  </main>
</>
  )
}

export default GestionHorarios
