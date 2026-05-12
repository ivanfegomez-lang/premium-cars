require("dotenv").config({ path: "./.env" });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const vehiculosRoutes = require("./routes/vehiculos");
const usuariosRoutes = require("./routes/usuarios");
const reservasRoutes = require("./routes/reservas");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use("/reservas", reservasRoutes);
app.use("/vehiculos", vehiculosRoutes);
app.use("/usuarios", usuariosRoutes);

// conexion mongodb
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log("error:", err));

// servir frontend Angular
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// levantar server
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});