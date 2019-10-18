// io se puede usar gracias a la libreria socket.io importada en el script superior 
var socket = io();

// On para escuchar
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

// Cuando se desconecta el servidor
socket.on('disconnect', function () {
    console.log("Perdimos conexión con el servidor");
});

// Emit para enviar información
socket.emit('enviarMensaje', {
    usuario: "Armando",
    mensaje: "Hola mundo"
}, function (resp) {
    console.log("Respues servidor: ", resp);
});

// Escuchar información
socket.on("enviarMensaje", function (resp) {
    console.log("Servidor: ", resp);
});