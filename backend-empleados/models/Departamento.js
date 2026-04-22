const mongoose = require("mongoose");

const DepartamentoSchema = new mongoose.Schema({
    codigo: { type: Number, required: true },
    nombre: { type: String,required: true }
});

module.exports = mongoose.model("Departamento", DepartamentoSchema);
