const { io } = require("../server");
io.on("connection", client => {
  console.log("usuario conectado");
  client.on("disconnect", () => {
    console.log("Usuario desconectado");
  });

  // Escuchar al cliente
  client.on("enviarMensaje", (data, callback) => {
    //console.log(data);
    if (data.usuario) {
      callback({
        resp: "Todo salio bien"
      });
    } else {
      callback({
        resp: "Todo salio mal"
      });
    }
  });

  // Eviar msm al cliente
  client.emit("enviarMensaje", {
    usuario: "Administrador",
    mensaje: "Bienvenido a la applicacion"
  });
});
// ========================================
