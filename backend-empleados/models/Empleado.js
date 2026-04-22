const mongoose = require("mongoose");

const EmpleadoSchema = new mongoose.Schema({
    codigo: { type: Number, required: true},
    nombre: { type: String, required: true},
    apellido1: { type: String, required: true},
    apellido2: { type: String, required: true},
    codigo_departamento: { type: Number, required: true}
});

module.exports = mongoose.model("Empleado", EmpleadoSchema);