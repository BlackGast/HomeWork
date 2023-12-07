"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParserJSON_1 = require("./src/ParserJSON");
const test = require("./src/question.json");
const tmp = ParserJSON_1.ParserJSON.parseToString(test);
console.log(tmp);
const tmp2 = ParserJSON_1.ParserJSON.parseToJSON(tmp);
console.log(tmp2);
// Пример для прверки JSON
let a = {
    "model": {
        "title": "Мой опрос",
        "description": "Описание опроса",
        "questions": [
            {
                "id": 1,
                "type": "single_choice",
                "question": "Ваш вопрос",
                "options": ["Ответ1", "Ответ2", "Ответ3", "Ответ4"]
            },
            {
                "id": 2,
                "type": "multiple_choice",
                "question": "Ваш вопрос",
                "options": ["Ответ", "Ответ", "Ответ", "Ответ", "Ответ"]
            },
            {
                "id": 3,
                "type": "numeric_scale",
                "question": "Ваш вопрос (от 1 до 10)",
                "min": 1,
                "max": 10
            },
            {
                "id": 4,
                "type": "text_input",
                "question": "Ответ",
                "placeholder": "Введите свой ответ"
            }
        ]
    }
};
debugger;
//# sourceMappingURL=index.js.map