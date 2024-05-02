import { IQuestionData } from "../../model/IQuestionData";
import { QuestionBase } from "./QuestionBase";

export class Dropdown extends QuestionBase {
    constructor(data: IQuestionData) {
        super(data);
        this.type = 'Dropdown';
        this.title = data.title || '';
        this.required = data.required || false;
    }
}