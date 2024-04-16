import { IQuestion } from "./model/IQuestion";

export class Question implements IQuestion {
    public title: string;
    public answer: string;
    public required: boolean;
    
    constructor(data: IQuestion) {
        this.title = data.title || '';
        this.answer = data.answer || 'Нет ответа';
        this.required = data.required || false;
    }
    public getTitle() {
        return this.title;
    }
    public getAnswer() {
        return this.answer;
    }
}