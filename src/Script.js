import pos1 from './Images/Pos1.png';
import pos2 from './Images/Pos2.png';
import pos3 from './Images/Pos3.png';
import pos4 from './Images/Pos4.png';
import pos5 from './Images/Pos5.png';
import pos6 from './Images/Pos6.png';

// ================= LÓGICA DEL LOGIN (index.html) =================

export function abrirTab(evento, idTab) {
    const contenidos = document.getElementsByClassName("contenido-tab");
    for (let i = 0; i < contenidos.length; i++) {
        contenidos[i].style.display = "none";
        contenidos[i].classList.remove("en-pantalla");
    }

    const mensajesError = document.getElementsByClassName("mensaje-error");
    for (let i = 0; i < mensajesError.length; i++) {
        mensajesError[i].textContent = "";
    }

    const botones = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < botones.length; i++) {
        botones[i].className = botones[i].className.replace(" activo", "");
    }

    document.getElementById(idTab).style.display = "flex";
    evento.currentTarget.className += " activo";
}

export function validarLogin(rol) {
    const usuarioIngresado = document.getElementById(`input-user-${rol}`).value;
    const contrasenaIngresada = document.getElementById(`input-pass-${rol}`).value;
    const contenedorError = document.getElementById(`error-${rol}`);

    contenedorError.textContent = "";

    let usuarioCorrecto = "";
    const contrasenaCorrecta = "1234";

    if (rol === 'empleado') usuarioCorrecto = "Empleado";
    else if (rol === 'analista') usuarioCorrecto = "Analista";
    else if (rol === 'supervisor') usuarioCorrecto = "Supervisor";
    else if (rol === 'gerente') usuarioCorrecto = "Admin";

    if (usuarioIngresado === usuarioCorrecto && contrasenaIngresada === contrasenaCorrecta) {

        // Guardar el rol ingresado en la memoria del navegador
        localStorage.setItem('sesionRol', rol);

        // Asignar nombres de ejemplo según el rol
        let nombreEjemplo = "";
        if (rol === 'empleado') nombreEjemplo = "Mateo García";
        if (rol === 'analista') nombreEjemplo = "Valeria Rojas";
        if (rol === 'supervisor') nombreEjemplo = "Andrés Castillo";
        if (rol === 'gerente') nombreEjemplo = "Camila Mendoza";

        localStorage.setItem('sesionNombre', nombreEjemplo);

        // Redireccionar
        window.location.href = "/inicio";
    } else {
        contenedorError.textContent = "Credenciales incorrectas";
    }
}

// Función para cerrar sesión
export function cerrarSesion() {
    // Borramos los datos almacenados
    localStorage.removeItem('sesionRol');
    localStorage.removeItem('sesionNombre');

    // Redirigimos al index
    window.location.href = "/";
}

// ================= LÓGICA PARA GESTIÓN DE OFERTAS =================

export function desplegarPostulantes(idOferta) {
    const contenedor = document.getElementById(idOferta);

    // Alternar la clase 'oculto'
    if (contenedor.classList.contains('oculto')) {
        contenedor.classList.remove('oculto');
    } else {
        contenedor.classList.add('oculto');
    }
}

// Función para abrir el modal y recibir el nombre del candidato
export function abrirModalContratacion(nombreCandidato) {
    // Cambiamos el texto del modal para que muestre el nombre real
    document.getElementById('texto-candidato-modal').innerHTML = `Candidato: <strong>${nombreCandidato}</strong>`;

    // Mostramos el modal quitando la clase 'oculto'
    document.getElementById('modal-contratacion').classList.remove('oculto');
}

// Función para cerrar el modal
export function cerrarModalContratacion() {
    document.getElementById('modal-contratacion').classList.add('oculto');
}

export function obtenerEmpleadoPorId(idEmpleado) {
    if (!idEmpleado || idEmpleado === 'none') return null;
    return baseDatosEmpleados[Number(idEmpleado) - 1] || null;
}

// ================= LÓGICA PARA GESTIÓN DE PERSONAL =================

// Base de datos simulada de empleados
const baseDatosEmpleados = [
    { documento: "1111111111", nombres: "Carlos", apellidos: "Ramírez", tipoDoc: "CC", nacimiento: "1990-05-15", correo: "cramirez@rhinosas.com.co", telefono: "3001111111", foto: pos1, hNormales: 160, hExtra: 10, hNocturno: 5, hExtraNoc: 2 },
    { documento: "2222222222", nombres: "Laura", apellidos: "Gómez", tipoDoc: "CC", nacimiento: "1992-08-20", correo: "lgomez@rhinosas.com.co", telefono: "3002222222", foto: pos2, hNormales: 150, hExtra: 0, hNocturno: 15, hExtraNoc: 0 },
    { documento: "3333333333", nombres: "Mateo", apellidos: "Vargas", tipoDoc: "CC", nacimiento: "1995-11-10", correo: "mvargas@rhinosas.com.co", telefono: "3003333333", foto: pos3, hNormales: 160, hExtra: 12, hNocturno: 0, hExtraNoc: 0 },
    { documento: "4444444444", nombres: "Andrea", apellidos: "Castro", tipoDoc: "CC", nacimiento: "1991-03-25", correo: "acastro@rhinosas.com.co", telefono: "3004444444", foto: pos4, hNormales: 160, hExtra: 5, hNocturno: 20, hExtraNoc: 5 },
    { documento: "5555555555", nombres: "Felipe", apellidos: "Martínez", tipoDoc: "CC", nacimiento: "1988-07-30", correo: "fmartinez@rhinosas.com.co", telefono: "3005555555", foto: pos5, hNormales: 140, hExtra: 0, hNocturno: 0, hExtraNoc: 0 },
    { documento: "6666666666", nombres: "Valentina", apellidos: "Ruiz", tipoDoc: "CE", nacimiento: "1997-12-05", correo: "vruiz@rhinosas.com.co", telefono: "3006666666", foto: pos6, hNormales: 160, hExtra: 8, hNocturno: 10, hExtraNoc: 4 }
];

export function buscarEmpleado() {
    const cedulaBuscada = document.getElementById('buscador-cedula').value;
    const empleado = baseDatosEmpleados.find(emp => emp.documento === cedulaBuscada);
    const contenedorPerfil = document.getElementById('perfil-empleado');

    if (empleado) {
        // Llenar los datos del formulario
        document.getElementById('perfil-foto-preview').src = empleado.foto;
        document.getElementById('perfil-h-normales').textContent = empleado.hNormales;
        document.getElementById('perfil-h-extra').textContent = empleado.hExtra;
        document.getElementById('perfil-h-nocturno').textContent = empleado.hNocturno;
        document.getElementById('perfil-h-extra-noc').textContent = empleado.hExtraNoc;

        document.getElementById('perfil-nombres').value = empleado.nombres;
        document.getElementById('perfil-apellidos').value = empleado.apellidos;
        document.getElementById('perfil-tipo-doc').value = empleado.tipoDoc;
        document.getElementById('perfil-documento').value = empleado.documento;
        document.getElementById('perfil-nacimiento').value = empleado.nacimiento;
        document.getElementById('perfil-correo').value = empleado.correo;
        document.getElementById('perfil-telefono').value = empleado.telefono;

        // Asegurarnos de que esté en modo lectura al buscar
        cancelarEdicion();

        // Mostrar la tarjeta
        contenedorPerfil.classList.remove('oculto');
    } else {
        alert('Empleado no encontrado en el sistema. Verifique el número de documento.');
        contenedorPerfil.classList.add('oculto');
    }
}

// Función para activar los inputs y cambiar los botones
export function habilitarEdicion() {
    const campos = document.querySelectorAll('.edit-field');
    campos.forEach(campo => campo.disabled = false);

    document.getElementById('btn-habilitar-edicion').classList.add('oculto');
    document.getElementById('btn-eliminar').classList.add('oculto');

    document.getElementById('btn-guardar-edicion').classList.remove('oculto');
    document.getElementById('btn-cancelar-edicion').classList.remove('oculto');
}

// Función para volver al modo lectura sin guardar (o después de guardar)
function cancelarEdicion() {
    const campos = document.querySelectorAll('.edit-field');
    campos.forEach(campo => campo.disabled = true);

    document.getElementById('btn-habilitar-edicion').classList.remove('oculto');
    document.getElementById('btn-eliminar').classList.remove('oculto');

    document.getElementById('btn-guardar-edicion').classList.add('oculto');
    document.getElementById('btn-cancelar-edicion').classList.add('oculto');
}

export function guardarEdicion() {
    // Aquí iría la lógica real para actualizar la base de datos
    alert('Datos del empleado actualizados exitosamente.');
    cancelarEdicion();
}

export function eliminarEmpleado() {
    // Diálogo de confirmación nativo del navegador
    const confirmacion = confirm("¿Está completamente seguro de que desea eliminar a este empleado del sistema? Esta acción es irreversible.");

    if (confirmacion) {
        alert('El empleado ha sido eliminado del sistema.');
        document.getElementById('perfil-empleado').classList.add('oculto');
        document.getElementById('buscador-cedula').value = "";
    }
}

// ================= LÓGICA PARA GESTIÓN DE SOLICITUDES =================

export function toggleSolicitud(solicitudesAbiertas, idSolicitud) {
    return {
        ...solicitudesAbiertas,
        [idSolicitud]: !solicitudesAbiertas[idSolicitud],
    };
}

export function crearResolucionSolicitud(accion, nombreEmpleado, idSolicitud) {
    return { accion, nombreEmpleado, idSolicitud };
}

// ================= LÓGICA PARA GESTIÓN DE EVALUACIONES (GERENTE) =================

// Base de datos específica para evaluaciones con roles variados
const bdEvaluaciones = {
    "1111111111": { nombre: "Carlos Ramírez", rol: "Desarrollador Backend", foto: pos1,
        criterios: {
            puntualidad: ["Hora de llegada", "Tiempo de culminación de tareas"],
            calidad: ["Precisión en entregables", "Atención al detalle"],
            colaboracion: ["Trabajo en equipo", "Comunicación asertiva"],
            cumplimiento: ["Seguimiento de normativas", "Asistencia a reuniones"]
        }
    },
    "2222222222": { nombre: "Laura Gómez", rol: "Asistente Contable", foto: pos2,
        criterios: {
            puntualidad: ["Hora de llegada", "Entrega de balances a tiempo"],
            calidad: ["Cero errores en digitación", "Organización de facturas"],
            colaboracion: ["Disposición para auditorías", "Comunicación asertiva"],
            cumplimiento: ["Uso correcto del software contable", "Asistencia a reuniones"]
        }
    },
    "3333333333": { nombre: "Mateo Vargas", rol: "Personal de Aseo", foto: pos3,
        criterios: {
            puntualidad: ["Hora de llegada", "Cumplimiento de rondas diarias"],
            calidad: ["Limpieza de áreas comunes", "Manejo adecuado de insumos"],
            colaboracion: ["Trabajo en equipo", "Reporte de daños a mantenimiento"],
            cumplimiento: ["Uso de dotación y EPP", "Seguimiento de normativas"]
        }
    },
    "4444444444": { nombre: "Andrea Castro", rol: "Coordinadora de Transporte", foto: pos4,
        criterios: {
            puntualidad: ["Hora de llegada", "Despacho de vehículos a tiempo"],
            calidad: ["Optimización de rutas", "Control de combustible"],
            colaboracion: ["Comunicación con conductores", "Atención a proveedores"],
            cumplimiento: ["Revisión de documentos vehiculares", "Reporte de siniestros"]
        }
    },
    "5555555555": { nombre: "Felipe Martínez", rol: "Diseñador UX/UI", foto: pos5,
        criterios: {
            puntualidad: ["Hora de llegada", "Tiempo de culminación de prototipos"],
            calidad: ["Innovación visual", "Atención al detalle en interfaces"],
            colaboracion: ["Recepción de feedback", "Colaboración con desarrolladores"],
            cumplimiento: ["Seguimiento de guías de marca", "Asistencia a dailys"]
        }
    },
    "6666666666": { nombre: "Valentina Ruiz", rol: "Ingeniera de Requisitos", foto: pos6,
        criterios: {
            puntualidad: ["Hora de llegada", "Entrega de documentación"],
            calidad: ["Claridad en historias de usuario", "Precisión en levantamiento de datos"],
            colaboracion: ["Comunicación con el cliente", "Apoyo al equipo técnico"],
            cumplimiento: ["Uso de estándares UML", "Asistencia a reuniones"]
        }
    }
};

let empleadoActualEval = null;

export function buscarParaEvaluacion() {
    const doc = document.getElementById('buscador-evaluacion').value;
    const empleado = bdEvaluaciones[doc];

    if (empleado) {
        empleadoActualEval = empleado;

        // Llenar datos básicos
        document.getElementById('eval-foto').src = empleado.foto;
        document.getElementById('eval-nombre').textContent = empleado.nombre;
        document.getElementById('eval-rol').textContent = empleado.rol;

        // Renderizar listas de criterios en la vista
        renderizarListaCriterios('display-puntualidad', empleado.criterios.puntualidad);
        renderizarListaCriterios('display-calidad', empleado.criterios.calidad);
        renderizarListaCriterios('display-colaboracion', empleado.criterios.colaboracion);
        renderizarListaCriterios('display-cumplimiento', empleado.criterios.cumplimiento);

        document.getElementById('panel-evaluacion').classList.remove('oculto');
    } else {
        alert("Empleado no encontrado.");
        document.getElementById('panel-evaluacion').classList.add('oculto');
    }
}

function renderizarListaCriterios(idContenedor, arrayCriterios) {
    const ul = document.getElementById(idContenedor);
    ul.innerHTML = "";
    arrayCriterios.forEach(crit => {
        ul.innerHTML += `<li>${crit}</li>`;
    });
}

export function abrirModalCriterios() {
    document.getElementById('modal-nombre-empleado').textContent = empleadoActualEval.nombre;

    // Cargar los inputs en el modal
    cargarInputsEdicion('edit-puntualidad', empleadoActualEval.criterios.puntualidad);
    cargarInputsEdicion('edit-calidad', empleadoActualEval.criterios.calidad);
    cargarInputsEdicion('edit-colaboracion', empleadoActualEval.criterios.colaboracion);
    cargarInputsEdicion('edit-cumplimiento', empleadoActualEval.criterios.cumplimiento);

    document.getElementById('modal-criterios').classList.remove('oculto');
}

export function cerrarModalCriterios() {
    document.getElementById('modal-criterios').classList.add('oculto');
}

function cargarInputsEdicion(idContenedor, arrayCriterios) {
    const contenedor = document.getElementById(idContenedor);
    contenedor.innerHTML = "";
    arrayCriterios.forEach(crit => {
        agregarCriterioInput(idContenedor, crit);
    });
}

// Función para agregar una fila de input para un criterio
export function agregarCriterioInput(idContenedor, valor = "") {
    const contenedor = document.getElementById(idContenedor);
    const div = document.createElement('div');
    div.className = 'item-criterio-edit';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'input-brutalista';
    input.value = valor;
    input.placeholder = 'Escriba el criterio...';

    const botonEliminar = document.createElement('button');
    botonEliminar.type = 'button';
    botonEliminar.className = 'btn-eliminar-criterio';
    botonEliminar.textContent = 'X';
    botonEliminar.addEventListener('click', () => {
        eliminarCriterioInput(botonEliminar, idContenedor);
    });

    div.append(input, botonEliminar);
    contenedor.appendChild(div);
}

// Función para eliminar asegurando que siempre quede 1 mínimo
export function eliminarCriterioInput(btn, idContenedor) {
    const contenedor = document.getElementById(idContenedor);
    if (contenedor.children.length > 1) {
        contenedor.removeChild(btn.parentElement);
    } else {
        alert("Atención: Debe existir al menos un (1) criterio de evaluación para esta categoría.");
    }
}

// Función para guardar los cambios y actualizar la vista
export function guardarCriterios() {
    // Recolectar valores de los inputs
    empleadoActualEval.criterios.puntualidad = extraerValoresInputs('edit-puntualidad');
    empleadoActualEval.criterios.calidad = extraerValoresInputs('edit-calidad');
    empleadoActualEval.criterios.colaboracion = extraerValoresInputs('edit-colaboracion');
    empleadoActualEval.criterios.cumplimiento = extraerValoresInputs('edit-cumplimiento');

    // Refrescar la vista principal
    renderizarListaCriterios('display-puntualidad', empleadoActualEval.criterios.puntualidad);
    renderizarListaCriterios('display-calidad', empleadoActualEval.criterios.calidad);
    renderizarListaCriterios('display-colaboracion', empleadoActualEval.criterios.colaboracion);
    renderizarListaCriterios('display-cumplimiento', empleadoActualEval.criterios.cumplimiento);

    cerrarModalCriterios();
    alert("Criterios de evaluación actualizados exitosamente en el sistema.");
}

function extraerValoresInputs(idContenedor) {
    const inputs = document.getElementById(idContenedor).querySelectorAll('input');
    const valores = [];
    inputs.forEach(input => {
        if(input.value.trim() !== "") {
            valores.push(input.value.trim());
        }
    });
    // Fallback de seguridad en caso de que borren el texto del único input
    if (valores.length === 0) valores.push("Criterio general");
    return valores;
}

// Funciones para los modales de contraseña
export function abrirModal(id) {
    document.getElementById(id).classList.remove('oculto');
}

export function cerrarModalPorId(id) {
    document.getElementById(id).classList.add('oculto');
}

// ================= FUNCIONES PARA EL ROL VISITANTE =================

// Alternar despliegue de información detallada de una oferta
export function toggleDetalleOferta(idOferta) {
    const contenedor = document.getElementById(idOferta);
    if (contenedor) {
        contenedor.classList.toggle('oculto');
    }
}

// Abrir modal de postulación
export function abrirModalAplicar(nombreOferta) {
    const modal = document.getElementById('modal-aplicar');
    const tituloModal = document.getElementById('nombre-oferta-modal');
    if (modal && tituloModal) {
        tituloModal.textContent = "Cargo: " + nombreOferta;
        modal.classList.remove('oculto');
    }
}

// Cerrar modal de postulación
export function cerrarModalAplicar() {
    const modal = document.getElementById('modal-aplicar');
    if (modal) {
        modal.classList.add('oculto');
    }
}

// Confirmar envío de postulación
export function enviarAplicacion(event) {
    event.preventDefault();
    alert("¡Tu postulación ha sido enviada con éxito!");
    cerrarModalAplicar();
}

// Retirar aplicación guardada
export function retirarAplicacion(boton) {
    if (confirm("¿Estás seguro de que deseas retirar tu aplicación a esta oferta?")) {
        const tarjeta = boton.closest('.tarjeta-historial');
        if (tarjeta) {
            tarjeta.remove();
        }
    }
}

