declare var require: any;
const fs = require('fs');

import {record, newRecord} from "./record";

const logPath = "./log.json"


function readLog():record[]{
    return JSON.parse(fs.readFileSync(logPath));
}

function writeLog(log:record[]){
    fs.writeFileSync(logPath, JSON.stringify(log));
}

function logInit(){
    fs.writeFileSync(logPath, JSON.stringify([]));
}