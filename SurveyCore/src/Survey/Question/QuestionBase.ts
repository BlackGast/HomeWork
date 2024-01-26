import { IQuestionData } from "../../model/IQuestionData";
import { QuestionType } from "../../model/QuestionType";
import { Utils } from "../Utils";


export class QuestionBase implements IQuestionData {
    public id: string;
    public title: string;
    public description: string;
    public type: QuestionType;
    public disabled: boolean;
    public readOnly: boolean;
    public required: boolean;
    public answer: string;

    constructor(data: IQuestionData) {
        this.id = data.id || Utils.generateGUID();
        this.type = 'Text';
        this.title = '';
        this.description = '';
        this.disabled = false;
        this.readOnly = false;
        this.answer = '';
        this.required = false;
    }

    /**
     * Базовый метод для получения значения ответа
     */
    public getValue() {}

    /**
     * Базовый метод для изменения значения ответа
     */
    public setValue(newValue: any) {}

    /**
     * Базовый метод для изменения одного из полей класса по названию
     */
    public setPropertyByName(name: string, value: any) {
        this[name as keyof this] = value;
    }

    /**
     * Базовый метод получения значения поля
     */
    public getPropertyByName(name: string): any {
        return this[name as keyof this];
    }

    public setFieldByName(fieldName: string, newValue: any, index: number) {}
 
    /**
     * Колбэк, который будет вызывать метод из контекста, в котором выполняется Survey.
     */
    public onChange() {}
}