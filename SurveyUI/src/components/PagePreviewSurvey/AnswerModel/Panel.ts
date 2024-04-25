import { Question } from "./Question";
import { IPanel } from "./model/IPanels";
import { IQuestion } from "./model/IQuestion";

export class Panel {
    public title: string;
    public questions: Question[];
    constructor(data: IPanel) {
        this.title = data.title || '';
        this.questions = [];
        if (data.questions.length) {
            for (const element of data.questions) {
                this.addQuestion(element)
            }
        }
    }

    public addQuestion = (data: IQuestion): void => {
        const question = new Question(data);
        this.questions.push(question);
    }

    public getQuestions(): IQuestion[] {
        return this.questions;
    }
}