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
