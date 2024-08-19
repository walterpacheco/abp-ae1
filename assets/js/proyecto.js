// proyecto.js

// Función constructora para Proyecto
function Proyecto(nombreProyecto, trabajadores) {
    this.nombreProyecto = nombreProyecto;
    this.trabajadores = trabajadores || []; // Array de Trabajadores
}

// Método para obtener el nombre del proyecto
Proyecto.prototype.getNombreProyecto = function() {
    return this.nombreProyecto;
};

// Método para establecer el nombre del proyecto
Proyecto.prototype.setNombreProyecto = function(nombreProyecto) {
    this.nombreProyecto = nombreProyecto;
};

// Método para agregar un trabajador al proyecto
Proyecto.prototype.agregarTrabajador = function(trabajador) {
    this.trabajadores.push(trabajador);
};

// Método para buscar un trabajador por nombre
Proyecto.prototype.buscarTrabajadorPorNombre = function(nombre) {
    return this.trabajadores.find(function(trabajador) {
        return trabajador.getNombre() === nombre;
    });
};

// Método para mostrar todos los trabajadores
Proyecto.prototype.mostrarTrabajadores = function() {
    return this.trabajadores.map(function(trabajador) {
        return trabajador.getNombre() + ', ' + trabajador.rut + ', ' + trabajador.cargo;
    }).join('\n');
};
