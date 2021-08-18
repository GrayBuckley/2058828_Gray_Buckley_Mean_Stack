export type testQuestion = {
    question: string;
    answers: string[];
}

export type submission = number[]; // indexes of answers

export type test = {
    questions: testQuestion[];
    minPass: number; // portion of correct answers needed to pass, between 0 and 1 (ex: 0.7)
    answerKey: submission;
}

export type correctAnswerReport = number;

export type incorrectAnswerReport = {
    submitted: number;
    correct: number;
}

export type answerReport = correctAnswerReport | incorrectAnswerReport;

export type testReport = {
    answers: answerReport[];
    totalCorrect: number;
    passed: boolean;
}
