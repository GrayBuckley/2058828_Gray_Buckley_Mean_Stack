declare var require: any;
const fs = require('fs');

import * as task from "../task";

const logPath = "./log.json"


export function readLog():task.task[]{
    return JSON.parse(fs.readFileSync(logPath));
}

function writeLog(log:task.task[]){
    fs.writeFileSync(logPath, JSON.stringify(log));
}

export function logInit(){
    try{
        fs.accessSync(logPath);
    } catch {
        fs.writeFileSync(logPath, JSON.stringify([]));
    }
}

export function addRecord(t:task.task){
    let log = readLog();
    task.pushTask(log,t);
    writeLog(log);
}

export function removeRecord(id:string){
    let log = readLog();
    task.removeTask(log, id);
    writeLog(log);
}