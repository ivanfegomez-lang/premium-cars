const express = require("express");
const router = express.Router();
const Departamento = require("../models/Departamento");
const Empleado = require("../models/Empleado");

// CREATE
router.post("/", async (req, res) => {
    const nuevo = new Departamento(req.body);
    const guardado = await nuevo.save();
    res.json(guardado);
});

// READ
router.get("/", async (req, res) => {
    const datos = await Departamento.find();
    res.json(datos);
});

// UPDATE
router.put("/:id", async (req, res) => {
    const actualizado = await Departamento.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(actualizado);
});

// DELETE
router.delete("/:id", async (req, res) => {
    await Departamento.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Departamento eliminado" });
});
// GET departamentos con empleados
router.get("/con-empleados", async (req, res) => {
    try {
        const departamentos = await Departamento.find();
        const empleados = await Empleado.find();

        const resultado = departamentos.map(dep => {
            return {
                ...dep._doc,
                empleados: empleados.filter(emp => emp.codigo_departamento === dep.codigo)
            };
        });

        res.json(resultado);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;