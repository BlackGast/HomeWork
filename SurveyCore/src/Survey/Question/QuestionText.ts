import { IQuestionData } from "../../model/IQuestionData";
import { QuestionSubType } from "../../model/QuestionSubType";
import { QuestionBase } from "./QuestionBase";

export class QuestionText extends QuestionBase {
    public asDescription: boolean;
    public isMultiline: boolean;
    public placeholder: string;
    public subType: QuestionSubType;

    constructor(data: IQuestionData) {
        super(data);
        this.type = 'Text';
        this.subType = 'Text';
        this.title = data.title || '';
        this.asDescription = false;
        this.required = data.required || false;
        this.answer = '';
        this.isMultiline = false;
    }

    public override getValue() {
        return this.answer;
    }

    public override setValue(newValue: string) {
        this.answer = newValue;
    }
}