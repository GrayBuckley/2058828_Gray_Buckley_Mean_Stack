declare var require: any;
declare var process: any;
import * as fileIO from './fileIO';
import { record, newRecord } from './record';
const readline = require('readline');

fileIO.logInit();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let fname:string;
let lname:string;
let gender:string;
let email:string;

rl.question('First Name: ', (answer) => {
    fname = answer;
    rl.question('Last Name: ', (answer) => {
        lname = answer;
        rl.question('Gender: ', (answer) => {
            gender = answer;
            rl.question('Email: ', (answer) => {
                email = answer;
                let record = newRecord(fname, lname, gender, email);
                fileIO.addRecord(record);
                rl.close();
            });
        });
    });
});

