const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    nombre: {type: String, required : true },
    email: {type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    password: {type: String, required: true},

    rol: {
        type: String,
        enum: ["cliente", "admin"],
        default: "cliente"
    }
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
