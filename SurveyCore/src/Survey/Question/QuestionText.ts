import { IQuestionData } from "../../model/IQuestionData";
import { QuestionBase } from "./QuestionBase";

export class QuestionText extends QuestionBase {
    public asDescription: boolean;
    public isMultiline: boolean;
    public placeholder: string;

    constructor(data: IQuestionData) {
        super(data);
        this.type = 'Text';
        this.title = data.title || '';
        this.description = data.description || '';
        this.asDescription = false;
        this.readOnly = data.readOnly || false;
        this.answer = '';
        this.isMultiline = false;
        this.placeholder = '';
    }

    public override getValue() {
        return this.answer;
    }

    public override setValue(newValue: string) {
        this.answer = newValue;
    }
}