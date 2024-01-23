import { DataManager } from "../DataManager/DataManager";
import { IPageData } from "../model/IPageData";
import { ISurveyModel } from "../model/ISurveyModel";
import { Page } from "./Page/Page";

class Survey {
    private _dataManager: DataManager;
    private _model: ISurveyModel;

    constructor(dataManager: DataManager) {
        if (!dataManager) {
            throw Error('dataManager should be implemented');
        }
        this._dataManager = dataManager;
        this._model = {
            description: '',
            title: '',
            pages: []
        };
    }

    public createModel(data?: string) {
        // Если есть JSON, распарсить его
        // Часть действий можно вообще вынести в парсер
        if (data) {
            const modelJSON = this._dataManager.stringToJSON(data);
            this._model.title = modelJSON.title ?? '';
            this._model.description = modelJSON.description ?? '';
            const pages: Page[] = [];
            modelJSON.pages?.forEach((page: IPageData) => {
                const pageModel = new Page(page);
                const panels = page.panels;
                if (panels.length) {
                    for (const question of panels) {
                        // console.log(question); //Отладочные
                        // console.log('');
                        pageModel.addPanel(question);
                    }
                    
                    // Добавить новые панели с вопросами
                }
                pages.push(pageModel);
            });
            this._model.pages = pages;
        }
        // Если нет, создать заготовку модели с базовыми значениями
        // Вернуть новую модель
        return this._model;
    }

    public getModel(): ISurveyModel {
        return this._model;
    }

    // Колбек, который будет вызывать метод из контекста, в котором выполняется Survey.
    // Например, будет производиться запись данных в CRM.
    public onSubmit() {
        (window as any).something.submit();
    }
}

export default Survey;