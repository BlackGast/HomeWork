import { ParserJSON } from './src/ParserJSON';
import { Survey } from './src/Survey';
import * as test from './src/question.json';

const tmp = ParserJSON.parseToString(test);
console.log(tmp);

const tmp2: Survey = ParserJSON.parseToJSON(tmp);
console.log(tmp2);

debugger
