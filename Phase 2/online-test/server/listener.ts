import * as grader from './grader';
import * as types from '../types';
declare var require: any;
var http = require('http');
var url = require('url');

const tests: types.test[] = [{
    questions: [{
            question: "Pick A",
            answers: ["A", "B", "C"]
        },{
            question: "How many questions are there?",
            answers: ["0", "1", "2", "40"]
    }],
    answerKey: {
        answers: [1,3],
        minPass: 0.5
    }
}];

http.createServer(function(req,res) {
    let request: types.request = JSON.parse(url.parse(req.url, true).query.request);
    if(request.testID >= tests.length || request.testID < 0) {
        requestFail(res);
        return;
    }
    res.writeHead(200);
    let response: string = "";
    if(types.isTestRequest(request)){
        response = JSON.stringify(tests[request.testID].questions);
    } else {
        let gRequest = request as types.gradeRequest;
        let report: types.testReport = grader.gradeSubmission(
            gRequest.submission,
            tests[request.testID].answerKey
            );
        response = JSON.stringify(report);
    }
    res.end(response);
}).listen(8080);

function requestFail(res): void{
    res.writeHead(404);
    res.end();
}