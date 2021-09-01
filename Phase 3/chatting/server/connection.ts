import {msg} from "./msg"
declare var require:any;
var io = require('socket.io');

type connection = {
    name: string;
    socket: any;
}

const connections: connection[] = [];

function addConnection(c:connection){connections.push(c);}
function sendMessage(msg:msg){
    connections.forEach(c => {
        if(msg.name == c.name)
            c.socket.emit("msg", msg.txt);
    });
}

const options = {cors: {origin: "*"}};
const server = io(options);
server.on("connection", s => {
    s.on("name", (clientName) => addConnection({name: clientName, socket: s}));
    s.on("send", (msg) => sendMessage(JSON.parse(msg)));
});
server.listen(8080);