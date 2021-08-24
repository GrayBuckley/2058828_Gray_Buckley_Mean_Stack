declare var require: any;
const fs = require('fs');

import {record} from "./record";

const logPath = "./log.json"


function readLog():record[]{
    return JSON.parse(fs.readFileSync(logPath));
}

function writeLog(log:record[]){
    fs.writeFileSync(logPath, JSON.stringify(log));
}

export function logInit(){
    try{
        fs.accessSync(logPath);
    } catch {
        fs.writeFileSync(logPath, JSON.stringify([]));
    }
}

export function addRecord(r:record){
    let log = readLog();
    log.push(r);
    writeLog(log);
}