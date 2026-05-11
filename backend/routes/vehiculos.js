const express = require ("express");
const router = express.Router();
const Vehiculo = require("../models/Vehiculo");
const verificarToken = require("../middlewares/auth");
const verificarAdmin = require("../middlewares/admin");
 
//  Crear Vehiculo
router.post("/", verificarToken, verificarAdmin, async (req, res) => {
    try {
        const nuevoVehiculo = new Vehiculo(req.body);
        const vehiculoGuardado = await nuevoVehiculo.save();
        res.json(vehiculoGuardado);
    } catch (error) {
        res.status(400).json({error: error.message });
    }
});

// Obtener todos los vehículos 
router.get("/", async (req, res) =>{
    try { 
        const vehiculos = await Vehiculo.find();
        res.json(vehiculos);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

// Eliminar Vehículo
router.delete("/:id", verificarToken, verificarAdmin, async (req, res) => {
    try{
        await Vehiculo.findByIdAndDelete(req.params.id);
        res.json({ mensaje: "vehículo eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.put("/:id", verificarToken, verificarAdmin, async (req, res) => {
    try {
        const vehiculoActualizado = 
        await Vehiculo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        );
        res.json(vehiculoActualizado);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

module.exports = router;