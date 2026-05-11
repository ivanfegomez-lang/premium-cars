const mongoose = require("mongoose");

const VehiculoSchema= new mongoose.Schema({
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    precio: { type: Number, required: true},
    imagen: {type: String},
    descripcion: { type: String},
    disponible: { type: Boolean, default: true}
}); 

module.exports = mongoose.model("Vehiculo", VehiculoSchema);
