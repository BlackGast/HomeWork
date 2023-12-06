import {Survey} from './Survey';

// Парсер и распарсер JSON
export class ParserJSON {
    static parseToString(test: {
        tests: {
            title: string; description: string; questions: ({
                id: number; type: string; question: string; //console.log(parsedData);
                //console.log(parsedData);
                options: string[]; min?: undefined; max?: undefined; placeholder?: undefined;
            } | {
                id: number; type: string; question: string; min: number; max: number; //console.log(parsedData);
                options?: undefined; placeholder?: undefined;
            } | {
                id: number; type: string; question: string; placeholder: string; //console.log(parsedData);
                options?: undefined; min?: undefined; max?: undefined;
            })[];
        };
    }) {
        throw new Error('Method not implemented.');
    }
    //Распарсер в объект
    public static parseToJSON(json: string) {
        const parsedData = JSON.parse(json);
        //console.log(parsedData);
        
    }

    //Парсер в JSON
    public parseToString(data: Survey) {
        return JSON.stringify(data.model);
    }
}