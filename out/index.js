"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParserJSON_1 = require("./src/ParserJSON");
const test = require("./src/question.json");
const tmp = ParserJSON_1.ParserJSON.parseToString(test);
console.log(tmp);
const tmp2 = ParserJSON_1.ParserJSON.parseToJSON(tmp);
console.log(tmp2);
debugger;
//# sourceMappingURL=index.js.map