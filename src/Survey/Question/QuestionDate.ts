import { IQuestionData } from "../../model/IQuestionData";
import { QuestionBase } from "./QuestionBase";

export class QuestionDate extends QuestionBase {

    constructor(data: IQuestionData) {
        super(data);
        this.type = 'Date';
        this.title =  data.title || '';
        this.description = data.description || '';
        this.readOnly = data.readOnly || false;
        this.answer = '';
    }

    public override getValue() {
        return this.answer;
    }

    public setValue(newValue: string) {
        this.answer = newValue
    }
}