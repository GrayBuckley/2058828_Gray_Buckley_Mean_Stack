import * as file from "./fileIO";
import {newTask} from "../task"
declare var require: any;
const https = require("http");
const url = require("url");

const listener = function (req, res) {
    res.writeHead(200);
    const urlObj = url.parse(req.url, true);
    const queryObject = urlObj.query;
    //console.log(urlObj.pathname);
    if(urlObj.pathname == "/add"){
        let t = newTask(queryObject.eid, queryObject.tid, queryObject.task, queryObject.due);
        file.addRecord(t);
    }
    if(urlObj.pathname == "/delete")
        file.removeRecord(queryObject.tid);
    res.end();
}
file.logInit();
const server = https.createServer(listener);
server.listen(8080);
