export type testQuestion = {
    question: string;
    answers: string[];
}

export type submission = number[]; // indexes of answers

export type answerKey = {
    answers: submission;
    minPass: number; // portion of correct answers needed to pass, between 0 and 1 (ex: 0.7)
}

export type test = {
    questions: testQuestion[];
    answerKey: answerKey;
}

export type answerReport = {
    submitted: number;
    key: number;
    correct: boolean;
}

export type testReport = {
    answers: answerReport[];
    totalCorrect: number;
    passed: boolean;
}

export type gradeRequest = {
    requestType: "grade";
    testID: number;
    submission: submission;
}

export type testRequest = {
    requestType: "test";
    testID: number;
}

export type request = gradeRequest | testRequest;

export function isGradeRequest(request: request): boolean{
    return request.requestType === "grade";
}

export function isTestRequest(request: request): boolean{
    return request.requestType === "test";
}