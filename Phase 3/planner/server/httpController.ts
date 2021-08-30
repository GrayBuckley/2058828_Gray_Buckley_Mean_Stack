import * as file from "./fileIO";
import {newTask} from "../task"
declare var require: any;
const http = require("http");
const url = require("url");

const listener = function (req, res) {
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'});
    const urlObj = url.parse(req.url, true);
    const queryObject = urlObj.query;
    //console.log(urlObj.pathname);
    if(urlObj.pathname == "/add"){
        let t = newTask(queryObject.eid, queryObject.tid, queryObject.task, queryObject.due);
        file.addRecord(t);
    }
    if(urlObj.pathname == "/delete")
        file.removeRecord(queryObject.tid);
    if(urlObj.pathname == "/get"){
        res.write(JSON.stringify(file.readLog()));
    }
    
    res.end();
}
file.logInit();
const server = http.createServer(listener);
server.listen(8080);
