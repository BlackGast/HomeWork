import { IQuestionData } from "../../model/IQuestionData";
import { QuestionBase } from "./QuestionBase";

export class QuestionSelect extends QuestionBase {
    constructor (data: IQuestionData) {
        super(data);
    }
}