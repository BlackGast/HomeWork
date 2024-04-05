import { IQuestion } from "./model/IQuestion";

export class Question implements IQuestion {
    public title: string;
    public answer: string;
    
    constructor(data: IQuestion) {
        this.title = data.title || '';
        this.answer = data.answer || '';
    }
    public getTitle() {
        return this.title;
    }
    public getAnswer() {
        return this.answer;
    }
}