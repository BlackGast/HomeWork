import { ISurveyModel } from "../../../../../SurveyCore/src/model/ISurveyModel";
import { Page } from "./Page";
import { IAnswerModel } from "./model/IAnswerModel";
import { IPage } from "./model/IPages";

class Answer {
    private _model: IAnswerModel;
    constructor() {
        this._model = {
            title: '',
            pages: []
        }
    }
    public createModel(data?: ISurveyModel) {
        if (data) {
            const pages: Page[] = [];
            data.pages?.forEach((page: IPage) => {
                const pageModel = new Page(page);
                const panels = page.panels
                if (panels.length) {
                    for (const question of panels) {
                        pageModel.addPanel(question)
                    }
                }
                pages.push(pageModel);
            })
            this._model.pages = pages;
        }
        return this._model;
    }

    public getModel(): IAnswerModel {
        return this._model;
    }
}

export default Answer;