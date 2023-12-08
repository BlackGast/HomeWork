import { IQuestion } from "../model/IQuestion";
import { QuestionType } from "../model/QeustionType";

export class Question {
    private id: number;
    private type: QuestionType | string;
    private question: string;
    private options: string[];
    private min: number;
    private max: number;
    private placeholder: string;

    updateQuestion(data: IQuestion): void {
        this.id = data.id;
        this.type = data.type;
        this.question = data.question;
        this.options = data.options;
        this.min = data.min;
        this.max = data.max;
        this.placeholder = data.placeholder;
    }

    updateQuestionProperty(value: any, propertyName: string): void {
        this[propertyName] = value;
    }
}
//const tmp = new Question ()
