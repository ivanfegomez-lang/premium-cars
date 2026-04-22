const express = require("express");
const router = express.Router();
const Empleado = require("../models/Empleado");

//  create
router.post("/", async (req, res) => {
    try {
        const nuevo = new Empleado(req.body);
        const guardado = await nuevo.save();
        res.json(guardado);
    } catch (error) {
        res.status(500).json(error);
    }
});
// read
router.get("/", async (req, res) => {
    const  empleados = await Empleado.find();
    res.json(empleados);
});
// update
router.put("/:id", async (req, res) => {
    const actualizado = await Empleado.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(actualizado);
});
// Delete
router.delete("/:id", async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Empleado eliminado"});
});
module.exports = router; 