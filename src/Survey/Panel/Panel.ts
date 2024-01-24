import { IPanelData } from "../../model/IPanelData";
import { IQuestionData } from "../../model/IQuestionData";
import { QuestionBase } from "../Question/QuestionBase";
import { QuestionChoice } from "../Question/QuestionChoice";
import { QuestionDate } from "../Question/QuestionDate";
import { QuestionNumber } from "../Question/QuestionNumber";
import { QuestionSelect } from "../Question/QuestionSelect";
import { QuestionText } from "../Question/QuestionText";
import { Utils } from "../Utils";

/**
 * Используется для группировки вопросов в UI
 */
export class Panel {
    public id: string;
    public title: string;
    public description: string;
    public columns: number;
    public questions: QuestionBase[];

    constructor(data: IPanelData) {
        // data может быть или JSON или string
        // TODO: Заполнить поля класса из data(если есть), сделать новые экземпляры класса Question, если таковые есть в data
        // Записать массив с Question в this.questions
        this.id = data.id || Utils.generateGUID();
        this.title = data.title;
        this.description = data.description;
        this.questions = [];
        this.columns = 1;

        if (typeof data.questions === 'string') {
            const questionData = JSON.parse(data.questions);
            this.addQuestion(questionData);
        } else if (data.questions.length) {
            for (const element of data.questions) {
                this.addQuestion(element)
            }
        }
    }

    public addQuestion = (data: IQuestionData) => {
        // TODO: Добавить в панель вопросы в соотвествии с data
        if (data.type === 'Choice') {
            const question = new QuestionChoice(data);
            this.questions.push(question);
        } else if (data.type === 'Select') {
            const question = new QuestionSelect(data);
            this.questions.push(question);
        } else if (data.type === 'Text') {
            const question = new QuestionText(data);
            this.questions.push(question);
        } else if (data.type === 'Number') {
            const question = new QuestionNumber(data);
            this.questions.push(question);
        } else if (data.type === 'Date') {
            const question = new QuestionDate(data);
            this.questions.push(question);
        }
    }

    public getQuestions(): QuestionBase[] {
        // TODO: вернуть вопросы
        return this.questions;
    }

    public getQuestionById(id: string): QuestionBase | undefined {
        // TODO: Вернуть вопрос по ID
        return this.questions.find(question => question.id === id);
    }
}