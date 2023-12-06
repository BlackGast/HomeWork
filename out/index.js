"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParserJSON_1 = require("./src/ParserJSON");
const test = require("./src/question.json");
console.log(typeof test);
const tmp = ParserJSON_1.ParserJSON.parseToString(test);
console.log(tmp);
// const tmp: string = JSON.stringify(test);
// console.log(tmp);
// const tmp2: ISurveyModel = JSON.parse(tmp);
// console.log(tmp2.tests);
// class parse {
//     title: string;
//     description: string;
//     questions: IQestion;
//     id: number;
//     type: QuestionType;
//     question: string;
//     options: string[];
//     min: number;
//     max: number;
//     placeholder: string;
//     constructor(title: string, 
//                 description: string,
//                 questions: IQestion,
//                 id: number,
//                 type: QuestionType,
//                 question: string,
//                 options: string[],
//                 min: number,
//                 max: number,
//                 placeholder: string) {
//         this.title = title;
//         this.description = description;
//         this.questions = questions;
//         this.id = id;
//         this.type = type;
//         this. question = question;
//         this.options = options;
//         this.min = min;
//         this.max = max;
//         this.placeholder = placeholder;
//     }
// }
debugger;
//# sourceMappingURL=index.js.map