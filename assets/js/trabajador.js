
// Función constructora para Trabajador
export function Trabajador(nombre, rut, cargo) {
    this.nombre = nombre;
    this.rut = rut;
    this.cargo = cargo;
}

// Método para obtener el nombre del trabajador
Trabajador.prototype.getNombre = function() {
    return this.nombre;
};

// Método para establecer el nombre del trabajador
Trabajador.prototype.setNombre = function(nombre) {
    this.nombre = nombre;
};

// Método para obtener el RUT del trabajador
Trabajador.prototype.getRut = function() {
    return this.rut;
};

// Método para establecer el RUT del trabajador
Trabajador.prototype.setRut = function(rut) {
    this.rut = rut;
};

// Método para obtener el cargo del trabajador
Trabajador.prototype.getCargo = function() {
    return this.cargo;
};

// Método para establecer el cargo del trabajador
Trabajador.prototype.setCargo = function(cargo) {
    this.cargo = cargo;
};
