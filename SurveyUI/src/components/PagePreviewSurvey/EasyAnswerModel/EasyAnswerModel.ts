import { IAnswerModel } from "../AnswerModel/model/IAnswerModel";
import { IEasyAnswerModel } from "./model/IEasyAnswerModel";
import { IEasyModel } from "./model/IEasyModel";

class EasyAnswerModel {
    private _model: IEasyModel;
    constructor() {
        this._model = {
            title: '',
            answer: []
        }
    }
    public createModel(data?: IAnswerModel) {
        let questionId: number = 0;
        let itemQuestion: IEasyAnswerModel = {
            answer: '',
            id: 0,
            title: '',
          };
        if (data) {
            data.pages.map((_page, index) => {
                data.pages[index].panels[0].questions.map((item) => {
                    itemQuestion.id = questionId;
                    itemQuestion.title = item.title;
                    itemQuestion.answer = item.answer;
                    questionId++;
                    this._model.answer.push(itemQuestion)
                });
            });
        }
        return this._model
    }
}

export default EasyAnswerModel;