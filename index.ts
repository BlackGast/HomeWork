import { IQuestion } from './model/IQuestion';
import { ParserJSON } from './src/ParserJSON';
import { Question } from './src/Question';
import { Survey } from './src/Survey';
import * as test from './src/question.json';

const tmp = ParserJSON.parseToString(test);
console.log(tmp);



const tmp2: Survey = ParserJSON.parseToJSON(tmp);
console.log(tmp2);


// Пример для прверки JSON
let a: Survey = {
  "model": {
    "title": "Мой опрос",
    "description": "Описание опроса",
    "questions": [
      {
        "id": 1,
        "type": "single_choice",
        "question": "Ваш вопрос",
        "options": ["Ответ1", "Ответ2", "Ответ3", "Ответ4"]
      } as IQuestion,
      {
        "id": 2,
        "type": "multiple_choice",
        "question": "Ваш вопрос",
        "options": ["Ответ", "Ответ", "Ответ", "Ответ", "Ответ"]
      } as IQuestion,
      {
        "id": 3,
        "type": "numeric_scale",
        "question": "Ваш вопрос (от 1 до 10)",
        "min": 1,
        "max": 10
      } as IQuestion,
      {
        "id": 4,
        "type": "text_input",
        "question": "Ответ",
        "placeholder": "Введите свой ответ"
      } as IQuestion
    ]
  }
} as Survey

debugger
