"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParserJSON = void 0;
// Парсер и распарсер JSON
class ParserJSON {
    static parseToString(test) {
        throw new Error('Method not implemented.');
    }
    //Распарсер в объект
    static parseToJSON(json) {
        const parsedData = JSON.parse(json);
        //console.log(parsedData);
    }
    //Парсер в JSON
    parseToString(data) {
        return JSON.stringify(data.model);
    }
}
exports.ParserJSON = ParserJSON;
//# sourceMappingURL=ParserJSON.js.map