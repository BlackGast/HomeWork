import { IPanelData } from "../../model/IPanelData";
import { IQuestionData } from "../../model/IQuestionData";
import { QuestionBase } from "../Question/QuestionBase";
import { QuestionChoice } from "../Question/QuestionChoice";

/**
 * Используется для группировки вопросов в UI
 */
export class Panel {
    public id: number;
    public title: string;
    public description: string;
    public columns: number;
    public questions: QuestionBase[];

    constructor(data: IPanelData) {
        // data может быть или JSON или string
        // TODO: Заполнить поля класса из data(если есть), сделать новые экземпляры класса Question, если таковые есть в data
        // Записать массив с Question в this.questions
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.questions = [];
        this.columns = 1;
    }

    public addQuestion = (data: IQuestionData) => {
        // TODO: Добавить в панель вопросы в соотвествии с data
        if (data.type === 'Choice') {
            const question = new QuestionChoice(data);
            
        }
    }

    public getQuestions(): QuestionBase[] {
        // TODO: вернуть вопросы
        return [];
    }

    public getQuestionById(id: number): QuestionBase | undefined {
        // TODO: Вернуть вопрос по ID
        return this.questions.find(question => question.id === id);
    }
}