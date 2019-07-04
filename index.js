const express=require('express');
const socket = require('socket.io');
const port = process.env.PORT || 80
//app setup

const app=express();
const server=app.listen(port, ()=>{
    console.log("app is lisnten on 4000 port");
});

//static file

app.use(express.static('public'));

// Socket setup & pass server
const io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

   // Handle chat event
   socket.on('chat', function(data){
    // console.log(data);
    io.sockets.emit('chat', data);
});

// Handle typing event
socket.on('typing', function(data){
    socket.broadcast.emit('typing', data);
});


});