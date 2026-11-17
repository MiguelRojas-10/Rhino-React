import '../../styles/common.css'

import { createElement } from 'react'
import Navbar from '../../components/Navbar.jsx'

function Evaluaciones() {
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
  {createElement(Navbar)}
  <main className="contenido-pagina">
    <div className="contenedor-gestion-evaluaciones">
      <h1 className="titulo-seccion">
        Configuración de Criterios de Evaluación
      </h1>
      {/* BUSCADOR */}
      <div className="tarjeta-busqueda">
        <input
          type="text"
          id="buscador-evaluacion"
          className="input-brutalista"
          placeholder="Buscar empleado por documento (Ej: 1111111111)"
        />
        <button className="btn-buscar" onclick="buscarParaEvaluacion()">
          Buscar Personal
        </button>
      </div>
      {/* RESULTADO DEL EMPLEADO Y SUS CRITERIOS (Oculto por defecto) */}
      <div id="panel-evaluacion" className="oculto">
        {/* Perfil Básico */}
        <div className="tarjeta-perfil-basico">
          <img
            id="eval-foto"
            src=""
            alt="Foto Empleado"
            className="foto-perfil-mediana"
          />
          <div className="datos-perfil-basico">
            <h2 id="eval-nombre">Nombre del Empleado</h2>
            <span id="eval-rol" className="etiqueta-rol">
              Rol del Empleado
            </span>
          </div>
        </div>
        <h2 className="subtitulo-seccion" style={{ marginTop: 30 }}>
          Criterios de Evaluación Actuales
        </h2>
        {/* Cuadrícula de Criterios (Visualización) */}
        <div className="grid-evaluaciones">
          {/* 1. PUNTUALIDAD */}
          <div className="tarjeta-evaluacion">
            <div className="cabecera-categoria bg-azul">
              <h2>Puntualidad (30%)</h2>
            </div>
            <ul id="display-puntualidad" className="lista-criterios-texto">
              {/* Se llena por JS */}
            </ul>
          </div>
          {/* 2. CALIDAD */}
          <div className="tarjeta-evaluacion">
            <div className="cabecera-categoria bg-azul">
              <h2>Calidad (30%)</h2>
            </div>
            <ul id="display-calidad" className="lista-criterios-texto">
              {/* Se llena por JS */}
            </ul>
          </div>
          {/* 3. COLABORACIÓN */}
          <div className="tarjeta-evaluacion">
            <div className="cabecera-categoria bg-azul">
              <h2>Colaboración (15%)</h2>
            </div>
            <ul id="display-colaboracion" className="lista-criterios-texto">
              {/* Se llena por JS */}
            </ul>
          </div>
          {/* 4. CUMPLIMIENTO */}
          <div className="tarjeta-evaluacion">
            <div className="cabecera-categoria bg-azul">
              <h2>Cumplimiento (25%)</h2>
            </div>
            <ul id="display-cumplimiento" className="lista-criterios-texto">
              {/* Se llena por JS */}
            </ul>
          </div>
        </div>
        <button className="btn-editar-grande" onclick="abrirModalCriterios()">
          Editar Criterios de Evaluación
        </button>
      </div>
    </div>
    {/* MODAL PARA EDITAR CRITERIOS (Oculto por defecto) */}
    <div id="modal-criterios" className="fondo-modal oculto">
      <div className="tarjeta-modal modal-scrollable">
        <h2 className="titulo-modal">Editar Criterios de Evaluación</h2>
        <p className="subtitulo-modal">
          Modificando criterios para: <strong id="modal-nombre-empleado" />
        </p>
        <div className="contenedor-edicion-categorias">
          {/* Edición Puntualidad */}
          <div className="seccion-edicion-cat">
            <h3 className="titulo-cat-edit">Puntualidad</h3>
            <div id="edit-puntualidad" className="lista-inputs-criterios" />
            <button
              className="btn-agregar-criterio"
              onclick="agregarCriterioInput('edit-puntualidad')"
            >
              + Añadir Criterio
            </button>
          </div>
          {/* Edición Calidad */}
          <div className="seccion-edicion-cat">
            <h3 className="titulo-cat-edit">Calidad</h3>
            <div id="edit-calidad" className="lista-inputs-criterios" />
            <button
              className="btn-agregar-criterio"
              onclick="agregarCriterioInput('edit-calidad')"
            >
              + Añadir Criterio
            </button>
          </div>
          {/* Edición Colaboración */}
          <div className="seccion-edicion-cat">
            <h3 className="titulo-cat-edit">Colaboración</h3>
            <div id="edit-colaboracion" className="lista-inputs-criterios" />
            <button
              className="btn-agregar-criterio"
              onclick="agregarCriterioInput('edit-colaboracion')"
            >
              + Añadir Criterio
            </button>
          </div>
          {/* Edición Cumplimiento */}
          <div className="seccion-edicion-cat">
            <h3 className="titulo-cat-edit">Cumplimiento</h3>
            <div id="edit-cumplimiento" className="lista-inputs-criterios" />
            <button
              className="btn-agregar-criterio"
              onclick="agregarCriterioInput('edit-cumplimiento')"
            >
              + Añadir Criterio
            </button>
          </div>
        </div>
        <div className="botones-modal" style={{ marginTop: 25 }}>
          <button
            type="button"
            className="btn-cancelar"
            onclick="cerrarModalCriterios()"
          >
            Cancelar
          </button>
          <button
            type="button"
            className="btn-accion-principal"
            onclick="guardarCriterios()"
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  </main>
</>
  )
}

export default Evaluaciones