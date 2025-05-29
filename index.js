// Servidor de Express

const Server = require("./models/server");
require('dotenv').config()
// const app = require('express')();
const server = new Server()
server.execute()
// const express = require('express');
// const app = express();

// Servidor de Socket
// const server = require('http').createServer(app);

// Configuración de Socket Server
// const io = require('socket.io')(server);

// Desplegar el directorio público
// app.use(express.static(__dirname + '/public'))

// io.on('connection', (socket) => {
//     // console.log('Cliente conectado!')
//     // console.log(socket.id)

//     // socket.emit('mensaje-bienvenida', {
//     //     msg: 'Bienvenido al Server',
//     //     fecha: new Date()
//     // })

//     socket.on('mensaje-cliente', (data) => {
//         console.log(data)
//     })

//     socket.on('mensaje-to-server', (data) => {
//         console.log(data)
//         // socket.emit('mensaje-from-server', data) //? socket envía el mensaje al cliente que disparo la solicitud
//         io.emit('mensaje-from-server', data) //* io envía el mensaje a todos los clientes conectados
//     })
// });

// server.listen(3000);
// server.listen(8080, () => {
//     console.log('Server corriendo en puerto: 8080')
// });