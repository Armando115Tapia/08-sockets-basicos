const express = require("express");

const path = require("path");
//=========================================
// Configuracion de Sockets
const socketIO = require("socket.io");
const http = require("http");
// ========================================

const app = express();

// ========================================
// Configuracion de Sockets
let server = http.createServer(app);
// ========================================

const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
// ========================================
// Configuracion de Sockets
// Esta es la comunicacion del backend

// Antes
// let io = socketIO(server);
// Despues 
module.exports.io = socketIO(server);
require("./sockets/socket");

// ========================================
// Configuracion de Sockets
server.listen(port, err => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});
// ========================================
