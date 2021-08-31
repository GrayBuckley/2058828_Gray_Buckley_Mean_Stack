import {msg} from "./msg"
declare var require:any;
var io = require('socket.io');
export type connection = {
    name: string;
    // socket
}

const connections: connection[] = [];

export function addConnection(c:connection){connections.push(c);}
export function sendMessage(msg:msg){
    connections.forEach(c => {
        if(msg.name == c.name){
            // send the body to that socket
        }
    });
}