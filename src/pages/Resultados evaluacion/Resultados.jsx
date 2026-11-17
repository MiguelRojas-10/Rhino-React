
import '../../styles/common.css'
import { createElement } from 'react'
import Navbar from '../../components/Navbar.jsx'

function Resultados() {
  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Resultados - Rhino</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
    rel="stylesheet"
  />
  {createElement(Navbar)}
  <main className="contenido-pagina">
    <div className="contenedor-resultados">
      <h1 className="titulo-seccion">Resultados de Evaluación</h1>
      {/* CUADRÍCULA DE CATEGORÍAS */}
      <div className="grid-evaluaciones">
        {/* 1. PUNTUALIDAD (30%) */}
        <div className="tarjeta-evaluacion">
          <div className="cabecera-categoria">
            <h2>Puntualidad</h2>
            <span className="peso-categoria">30%</span>
          </div>
          <div className="lista-metricas">
            <div className="metrica">
              <span className="nombre-metrica">Hora de llegada</span>
              <span className="puntaje-metrica">9.0</span>
            </div>
            <div className="metrica">
              <span className="nombre-metrica">
                Tiempo de culminación de tareas
              </span>
              <span className="puntaje-metrica">8.0</span>
            </div>
          </div>
          <div className="promedio-categoria">
            <span>Promedio:</span> <strong>8.5</strong>
          </div>
        </div>
        {/* 2. CALIDAD (30%) */}
        <div className="tarjeta-evaluacion">
          <div className="cabecera-categoria">
            <h2>Calidad</h2>
            <span className="peso-categoria">30%</span>
          </div>
          <div className="lista-metricas">
            <div className="metrica">
              <span className="nombre-metrica">Precisión en entregables</span>
              <span className="puntaje-metrica">9.5</span>
            </div>
            <div className="metrica">
              <span className="nombre-metrica">Atención al detalle</span>
              <span className="puntaje-metrica">9.5</span>
            </div>
          </div>
          <div className="promedio-categoria">
            <span>Promedio:</span> <strong>9.5</strong>
          </div>
        </div>
        {/* 3. COLABORACIÓN (15%) */}
        <div className="tarjeta-evaluacion">
          <div className="cabecera-categoria">
            <h2>Colaboración</h2>
            <span className="peso-categoria">15%</span>
          </div>
          <div className="lista-metricas">
            <div className="metrica">
              <span className="nombre-metrica">Trabajo en equipo</span>
              <span className="puntaje-metrica">8.0</span>
            </div>
            <div className="metrica">
              <span className="nombre-metrica">Comunicación asertiva</span>
              <span className="puntaje-metrica">9.0</span>
            </div>
          </div>
          <div className="promedio-categoria">
            <span>Promedio:</span> <strong>8.5</strong>
          </div>
        </div>
        {/* 4. CUMPLIMIENTO (25%) */}
        <div className="tarjeta-evaluacion">
          <div className="cabecera-categoria">
            <h2>Cumplimiento</h2>
            <span className="peso-categoria">25%</span>
          </div>
          <div className="lista-metricas">
            <div className="metrica">
              <span className="nombre-metrica">Seguimiento de normativas</span>
              <span className="puntaje-metrica">10.0</span>
            </div>
            <div className="metrica">
              <span className="nombre-metrica">Asistencia a reuniones</span>
              <span className="puntaje-metrica">9.0</span>
            </div>
          </div>
          <div className="promedio-categoria">
            <span>Promedio:</span> <strong>9.5</strong>
          </div>
        </div>
      </div>
      {/* PROMEDIO GENERAL PONDERADO */}
      {/* Cálculo: (8.5*0.30) + (9.5*0.30) + (8.5*0.15) + (9.5*0.25) = 9.05 (Redondeado a 9.1) */}
      <div className="tarjeta-promedio-final">
        <h2>Promedio General Ponderado</h2>
        <div className="contenedor-puntaje-final">
          <span className="puntaje-final">9.1</span>
          <span className="escala-final">/ 10</span>
        </div>
        <p className="mensaje-desempeno">
          ¡Excelente desempeño! Sigue aportando valor al equipo Rhino.
        </p>
      </div>
    </div>
  </main>
</>
  )
}

export default Resultados
