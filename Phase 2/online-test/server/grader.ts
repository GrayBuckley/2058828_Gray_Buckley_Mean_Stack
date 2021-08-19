import * as types from "../types";

function gradeQuestion(submission: number, key: number): types.answerReport{
    return {
        submitted: submission,
        key: key,
        correct: submission === key
    }
}


export function gradeSubmission(submission: types.submission, key: types.answerKey): types.testReport{
    let denom = key.answers.length;
    let num = 0;
    let questionReports:types.answerReport[] = [];
    for(let i = 0; i < denom; i++){
        let thisReport = gradeQuestion(submission[i], key.answers[i]);
        questionReports.push(thisReport);
        if(thisReport.correct) num++;
    }
    return {
        answers: questionReports,
        totalCorrect: num,
        passed: (num / denom) >= key.minPass
    }
}