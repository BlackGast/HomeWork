import {Survey} from './Survey';

// Парсер и распарсер JSON
export class ParserJSON {
    //Парсер в объект
    public static parseToJSON(json: string) {
        return JSON.parse(json);
    }

    //Парсер в строку
    public static parseToString(data: Survey) {
        return JSON.stringify(data);
    }
}