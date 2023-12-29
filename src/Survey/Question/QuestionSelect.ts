import { IQuestionData } from "../../model/IQuestionData";
import { QuestionBase } from "./QuestionBase";

export class QuestionSelect extends QuestionBase {

    constructor (data: IQuestionData) {
        super(data);
        this.type = 'Select';
        this.title = '';
        this.description = '';
        this.answer = '';
        this.readOnly = false;
    }

    public override getValue() {
        return this.answer;
    }

    public setValue(newValue: any) {
        this.answer = newValue;
    }
}