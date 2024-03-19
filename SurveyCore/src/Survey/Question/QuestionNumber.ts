import { IQuestionData } from "../../model/IQuestionData";
import { Validator } from "../Validator/Validator";
import { QuestionBase } from "./QuestionBase";

export class QuestionNumber extends QuestionBase {
    public placeholder: string;
    public isMultiline: boolean;
    public maxNum: number;

    constructor(data: IQuestionData) {
        super(data);
        this.type = 'Number';
        this.title = data.title || '';
        this.description = data.description || '';
        this.readOnly = data.readOnly || false;
        this.answer = '';
        this.placeholder = '';
        this.isMultiline = false;
        this.maxNum = 5
    }

    public override getValue() {
        return this.answer;
    }

    public setValue(newValue: any) {
        if (Validator.validNum(newValue)) {
            this.answer = newValue;
        } else {
            console.log("Ошибка"); //здесь нужно реализовать вывод на экран ошибки с валидацией  
        }
    }
}