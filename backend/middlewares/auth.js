const jwt = require("jsonwebtoken");

const verificarToken = (req, res, next) => {
    const header = req.header("Authorization");

    if (!header) {
    return res.status(401).json({ mensaje: "acceso denegado" });
}

const token = header.split(" ")[1];

     try {
        const verificado = jwt.verify(token, "secreto_jwt");
        req.usuario= verificado;
        next();
     } catch (error) {
        res.status(400).json({ mensaje: "Token Inválido"});
     }
 };

  module.exports = verificarToken;
