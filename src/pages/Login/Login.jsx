import './Login.css'
import logo from '../../Images/Logo.png'
import { createElement, useState } from 'react'
import Inicio from '../Inicio/Inicio.jsx'

function Login() {
  const [mostrarInicio, setMostrarInicio] = useState(false)

  if (mostrarInicio) {
    return createElement(Inicio, {
      onCerrarSesion: () => setMostrarInicio(false),
    })
  }

  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Inicio de Sesión - Rhino</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <div className="contenedor-principal">
    <div className="mitad-izquierda">
      <img src={logo} alt="Logo de la empresa" className="logo" />
      <p className="texto-personal">
        En este portal usted podrá iniciar sesión para consultar todos sus
        respectivos datos como parte del personal de su respectiva empresa.
      </p>
      <a href="ofertas_visitante.html" className="link-visitante">
        Para mirar las ofertas de empleo disponibles, ¡Clickee aquí!
      </a>
    </div>
    <div className="mitad-derecha">
      <div className="tab-bar">
        <button
          className="tab-btn activo"
          onclick="abrirTab(event, 'tab-empleado')"
        >
          Empleado
        </button>
        <button className="tab-btn" onclick="abrirTab(event, 'tab-analista')">
          Analista
        </button>
        <button className="tab-btn" onclick="abrirTab(event, 'tab-supervisor')">
          Supervisor
        </button>
        <button className="tab-btn" onclick="abrirTab(event, 'tab-gerente')">
          Gerente general
        </button>
      </div>
      <div className="seccion-login">
        <form
          id="tab-empleado"
          className="contenido-tab en-pantalla"
          onSubmit={(event) => {
            event.preventDefault()
            setMostrarInicio(true)
          }}
        >
          <h2>Ingreso: Empleado</h2>
          <input
            type="text"
            id="input-user-empleado"
            placeholder="Usuario"
            required
          />
          <input
            type="password"
            id="input-pass-empleado"
            placeholder="Contraseña"
            required
          />
          <button className="btn-login" type="submit">
            Iniciar sesión
          </button>
          <p id="error-empleado" className="mensaje-error" />
        </form>
        <div id="tab-analista" className="contenido-tab">
          <h2>Ingreso: Analista</h2>
          <input type="text" id="input-user-analista" placeholder="Usuario" />
          <input
            type="password"
            id="input-pass-analista"
            placeholder="Contraseña"
          />
          <button className="btn-login" onclick="validarLogin('analista')">
            Iniciar sesión
          </button>
          <p id="error-analista" className="mensaje-error" />
        </div>
        <div id="tab-supervisor" className="contenido-tab">
          <h2>Ingreso: Supervisor</h2>
          <input type="text" id="input-user-supervisor" placeholder="Usuario" />
          <input
            type="password"
            id="input-pass-supervisor"
            placeholder="Contraseña"
          />
          <button className="btn-login" onclick="validarLogin('supervisor')">
            Iniciar sesión
          </button>
          <p id="error-supervisor" className="mensaje-error" />
        </div>
        <div id="tab-gerente" className="contenido-tab">
          <h2>Ingreso: Gerente General</h2>
          <input type="text" id="input-user-gerente" placeholder="Usuario" />
          <input
            type="password"
            id="input-pass-gerente"
            placeholder="Contraseña"
          />
          <button className="btn-login" onclick="validarLogin('gerente')">
            Iniciar sesión
          </button>
          <p id="error-gerente" className="mensaje-error" />
        </div>
      </div>
      {/* NUEVOS BOTONES DE ACCIÓN DE CONTRASEÑA */}
      {/* LOS BOTONES DEBEN ESTAR JUNTOS */}
      <div className="contenedor-acciones-extra">
        <button className="tab-btn" onclick="abrirModal('modal-recuperar')">
          Olvidé mi contraseña
        </button>
        <button className="tab-btn" onclick="abrirModal('modal-cambiar')">
          Cambiar contraseña
        </button>
      </div>
      <a href="https://rhinosas.com.co" className="link-quienes-somos">
        ¿Quienes somos?
      </a>
    </div>
  </div>
  {/* MODALES (Ocultos por defecto) */}
  <div id="modal-recuperar" className="fondo-modal oculto">
    <div className="tarjeta-modal">
      <h2>Recuperar Contraseña</h2>
      <input
        type="email"
        className="input-brutalista"
        placeholder="Ingrese su correo electrónico"
      />
      <div className="botones-modal">
        <button
          className="btn-cancelar"
          onclick="cerrarModal('modal-recuperar')"
        >
          Cancelar
        </button>
        <button className="btn-login" style={{ width: "100%" }}>
          Enviar Correo
        </button>
      </div>
    </div>
  </div>
  <div id="modal-cambiar" className="fondo-modal oculto">
    <div className="tarjeta-modal">
      <h2>Cambiar Contraseña</h2>
      <input
        type="email"
        className="input-brutalista"
        placeholder="Correo electrónico"
      />
      <input
        type="password"
        className="input-brutalista"
        placeholder="Contraseña actual"
      />
      <input
        type="password"
        className="input-brutalista"
        placeholder="Nueva contraseña"
      />
      <input
        type="password"
        className="input-brutalista"
        placeholder="Confirmar nueva contraseña"
      />
      <div className="botones-modal">
        <button className="btn-cancelar" onclick="cerrarModal('modal-cambiar')">
          Cancelar
        </button>
        <button className="btn-login" style={{ width: "100%" }}>
          Actualizar
        </button>
      </div>
    </div>
  </div>
    </>
  )
}

export default Login
