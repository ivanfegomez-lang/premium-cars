require("dotenv").config({ path: "./.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const vehiculosRoutes = require("./routes/vehiculos");
const usuariosRoutes = require("./routes/usuarios");
const reservasRoutes = require("./routes/reservas");


const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/reservas", reservasRoutes);

// conexion a mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB conectado"))
    .catch(err => console.log("error:", err));

// ruta de prueba
app.get("/", (req, res) => {
    res.send("Api Funcionando")
});

app.use("/vehiculos", vehiculosRoutes);
app.use("/usuarios", usuariosRoutes);

//  levantar server
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});

