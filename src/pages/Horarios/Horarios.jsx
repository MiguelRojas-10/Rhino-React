
import '../../styles/common.css'
import { createElement } from 'react'
import Navbar from '../../components/Navbar.jsx'

function Horarios() {
  return (
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
  {createElement(Navbar)}
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
