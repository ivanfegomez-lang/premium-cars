const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//  Crear Usuario (Registro)
router.post("/", async (req, res) => {
    try {
        const { nombre, email, telefono, password } = req.body;
        const passwordEncriptada = await bcrypt.hash(password, 10);
        const nuevoUsuario = new Usuario({
            nombre,
            email,
            telefono,
            password: passwordEncriptada
        });

        const usuarioGuardado = await nuevoUsuario.save();
        res.json (usuarioGuardado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// LOGIN
 router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const usuario = await Usuario.findOne({ email });
        if(!usuario) {
            return res.status(400).json({ mensaje: "Usuario no encontrado" });
        }

        const validPassword = await bcrypt.compare(password, usuario.password);
        if(!validPassword) {
            return res.status(400).json({ mensaje: "Contraseña incorrecta"});
        }

        const token = jwt.sign(
            { 
                id: usuario._id,
                rol: usuario.rol
            },
            "secreto_jwt",
            { expiresIn: "1h" }
        );
        
        res.json({ token });
        } catch (error) {
            res.status(500).json({ error: error.message});
        }
 });

//  Obtener todos los usuarios 
router.get("/", async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
});

module.exports = router;

