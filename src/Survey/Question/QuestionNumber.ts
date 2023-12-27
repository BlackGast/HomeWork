import { IQuestionData } from "../../model/IQuestionData";
import { QuestionBase } from "./QuestionBase";

export class QuestionNumber extends QuestionBase {
    public placeholder: string;
    public isMultiline: boolean;

    constructor(data: IQuestionData) {
        super(data);
        this.type = 'Number';
        this.title = '';
        this.description = '';
        this.readOnly = false;
        this.answer = '';
        this.placeholder = '';
        this.isMultiline = false;
    }

    public override getValue() {
        return this.answer;
    }

    public setValue(newValue: any) {
        this.answer = newValue;
    }
}