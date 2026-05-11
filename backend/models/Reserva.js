const mongoose = require("mongoose");

const reservaSchema = new mongoose.Schema({
    usuario : {type: mongoose.Schema.Types.ObjectId, ref : "Usuario"},
    vehiculo : {type: mongoose.Schema.Types.ObjectId, ref : "Vehiculo"},
    fechaInicio: { type: Date, required: true },
    fechaFin: { type: Date, required: true },
    precioTotal:{ type: Number, required : true},
    estado: { type: String, default: "activa"}
});

module.exports = mongoose.model("Reserva", reservaSchema);
