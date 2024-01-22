import { IQuestionData } from "../../model/IQuestionData";
import { QuestionType } from "../../model/QuestionType";
import { Utils } from "../Utils";


export class QuestionBase implements IQuestionData {
    // Свойства вопроса
    // id можно заменить на GUID
    public id: number;
    public title: string;
    public description: string;
    public type: QuestionType;
    public disabled: boolean;
    public readOnly: boolean;
    public required: boolean;
    public answer: string;

    constructor(data: IQuestionData) {
        // Записать поля из data, если есть
        this.id = Utils.generateGUID();
        this.type = 'Text';
        this.title = '';
        this.description = '';
        this.disabled = false;
        this.readOnly = false;
        this.answer = '';
        this.required = false;
    }

    public getValue() {
        // Базовый метод для получения значения ответа   
    }

    public setValue(newValue: any) {
        // Базовый метод для изменения значения ответа
    }

    public setPropertyByName(name: string, value: any) {
        // Базовый метод для изменения одного из полей класса по названию
        this[name as keyof this] = value;
    }

    public getPropertyByName(name: string): any {
        // Базовый метод получения значения поля
        return this[name as keyof this];
    }

    // Колбэк, который будет вызывать метод из контекста, в котором выполняется Survey.
    public onChange() {
        //...
    }
}