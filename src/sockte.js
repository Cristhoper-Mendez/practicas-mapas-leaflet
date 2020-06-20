module.exports = io => {
    io.on('connection', (socket) => {
        console.log('New user connected 1');

        socket.on('coordinates', coords => {
            // console.log(coords);
            socket.broadcast.emit('newUser', coords);
        });
    })
}