"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParserJSON = void 0;
// Парсер и распарсер JSON
class ParserJSON {
    //Парсер в объект
    static parseToJSON(json) {
        return JSON.parse(json);
    }
    //Парсер в строку
    static parseToString(data) {
        return JSON.stringify(data);
    }
}
exports.ParserJSON = ParserJSON;
//# sourceMappingURL=ParserJSON.js.map