const express = require ("express");
const router = express.Router();
const Reserva = require("../models/Reserva");
const verificarToken = require ("../middlewares/auth");

// crear reserva

router.post("/", verificarToken, async (req, res) => {
    try{
        const { 
            vehiculo,
            fechaInicio,
            fechaFin,
            precioTotal
        } = req.body;
        // Verificar disponibilidad

        const reservaExistente =
        await Reserva.findOne({
             vehiculo,estado: "activa",
              $or: [{
            fechaInicio: {
                $lte: fechaFin
            },

            fechaFin: {
                $gte: fechaInicio
                }
            }]
        });

        if (reservaExistente) {

        return res.status(400).json({mensaje:"Vehículo no disponible en esas fechas"});
        }
        
        const nuevaReserva = new Reserva({
            usuario: req.usuario.id,
            vehiculo,
            fechaInicio,
            fechaFin,
            precioTotal
        });
        const reservaGuardada = await nuevaReserva.save();
        res.json(reservaGuardada);
    } catch (error) {
        res.status(500).json({ error:error.message });
    }
});

// obtener reservas
router.get("/", verificarToken, async (req, res) => {
    try {
        let reservas;

if (req.usuario.rol === "admin") {

    reservas = await Reserva.find()
        .populate("vehiculo")
        .populate("usuario");

} else {

    reservas = await Reserva.find({
        usuario: req.usuario.id
    })
    .populate("vehiculo")
    .populate("usuario");

}

res.json(reservas);
    } catch (error) {
        res.status(500).json({ error:error.message });
    }
});
// Actualizar estado reserva
router.put("/:id",
    verificarToken,
    async (req, res) => {

    try {

        const reservaActualizada =
        await Reserva.findByIdAndUpdate(

            req.params.id,

            {
                estado: req.body.estado
            },

            { new: true }

        );

        res.json(reservaActualizada);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

module.exports = router;