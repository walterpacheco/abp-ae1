// main.js

// Función para validar que un texto solo contenga letras y espacios
function validarSoloLetras(texto) {
    var regex = /^[a-zA-Z\s]+$/;
    return regex.test(texto);
}

// Función para validar que un RUT solo contenga números y la letra K
function validarRut(rut) {
    var regex = /^[0-9]+[kK]?$/;
    return regex.test(rut);
}

function registrarProyecto() {
    var nombreProyecto = document.getElementById('nombreProyecto').value;
    var nombreTrabajador = document.getElementById('nombreTrabajador').value;
    var rutTrabajador = document.getElementById('rutTrabajador').value;
    var cargoTrabajador = document.getElementById('cargoTrabajador').value;

    // Validaciones
    if (!validarSoloLetras(nombreProyecto)) {
        alert('El nombre del proyecto solo puede contener letras y espacios.');
        return;
    }
    if (!validarSoloLetras(nombreTrabajador)) {
        alert('El nombre del trabajador solo puede contener letras y espacios.');
        return;
    }
    if (!validarSoloLetras(cargoTrabajador)) {
        alert('El cargo solo puede contener letras y espacios.');
        return;
    }
    if (!validarRut(rutTrabajador)) {
        alert('El RUT solo puede contener números y la letra K.');
        return;
    }

    // Crear objetos Trabajador y Proyecto
    var trabajador = new Trabajador(nombreTrabajador, rutTrabajador, cargoTrabajador);
    var proyecto = new Proyecto(nombreProyecto, [trabajador]);

    // Agregar el proyecto y trabajador a la tabla en pantalla
    agregarProyectoATabla(proyecto, trabajador);

    // Limpiar los campos del formulario
    document.getElementById('formulario-proyecto').reset();
}

function agregarProyectoATabla(proyecto, trabajador) {
    var tabla = document.getElementById('tablaProyectos').getElementsByTagName('tbody')[0];
    var nuevaFila = tabla.insertRow();

    var celdaProyecto = nuevaFila.insertCell(0);
    var celdaTrabajador = nuevaFila.insertCell(1);
    var celdaRut = nuevaFila.insertCell(2);
    var celdaCargo = nuevaFila.insertCell(3);

    celdaProyecto.innerHTML = proyecto.getNombreProyecto(); // Asegúrate de que esta línea llame al método correctamente
    celdaTrabajador.innerHTML = trabajador.getNombre();
    celdaRut.innerHTML = trabajador.rut;
    celdaCargo.innerHTML = trabajador.cargo;
}

document.addEventListener('DOMContentLoaded', () => {
    // Aquí puedes colocar cualquier código adicional que necesites ejecutar cuando el DOM esté listo.
});
