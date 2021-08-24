declare var require: any;
const fs = require('fs');

import {record, newRecord} from "./record";

const logPath = "./log.json"


export function readLog():record[]{
    return JSON.parse(fs.readFileSync(logPath));
}

export function writeLog(log:record[]){
    fs.writeFileSync(logPath, JSON.stringify(log));
}

function logInit(){
    try{
        fs.accessSync(logPath);
    } catch {
        fs.writeFileSync(logPath, JSON.stringify([]));
    }
}