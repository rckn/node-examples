var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path');
io.on('connection', handleIO );

// If 10 people connects to our website
// this will be called 10 difference time with 10 different sockets
function handleIO(socket) {
    
    function disconnect() {
        clearInterval(intv);
        console.log("client disconnected");
    }
    
    console.log("client connected");
    
    socket.on("disconnect",disconnect);
    
    var intv = setInterval(function(){
       socket.emit("hello",Math.random()); 
    },1000);
    
}

app.get('/',function(req,res){ 
     res.sendFile(path.join(__dirname+'/index.html'));
});
server.listen(5000, () => {
    console.log('Listening on port 5000.....')
});