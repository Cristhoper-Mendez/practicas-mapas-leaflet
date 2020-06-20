const express = require ('express');
const engine = require ('ejs-mate');
const path = require('path');
const socketio = require('socket.io')
const http = require('http');


//inizialitation
const app = express();
const server2 = http.createServer(app);
const io = socketio(server2);

//settings
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Routes
app.use(require('./routes/route.js'));

//sockets
require('./sockte')(io);

//statics
app.use(express.static(path.join(__dirname, 'public')));

//server
server2.listen(3000, () => {
    console.log("server on port 3000");
});