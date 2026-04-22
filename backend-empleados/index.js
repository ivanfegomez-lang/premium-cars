require("dotenv").config({ path: "./.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const empleadosRoutes = require("./routes/empleados");
const departamentosRoutes = require("./routes/departamentos");


const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// conexion a mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB conectado"))
    .catch(err => console.log("error:", err));

// ruta de prueba
app.get("/", (req, res) => {
    res.send("Api Funcionando")
});
app.use("/empleados", empleadosRoutes);
app.use("/departamentos", departamentosRoutes);

//  levantar server
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});

