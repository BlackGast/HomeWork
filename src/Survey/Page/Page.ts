import { IPageData } from "../../model/IPageData";
import { IPanelData } from "../../model/IPanelData";
import { Panel } from "../Panel/Panel";

/**
 * Используется для группировки вопросов в UI
 */
export class Page {
    public id: number;
    public title: string;
    public description: string;
    public panels: Panel[];

    constructor(data: IPageData) {
        //TODO: Заполнить поля класса значениями по умолчанию или входными данными из data, если JSON определен
        this.title = data.title;
        this.description = data.description;
        this.panels = [];
    }

    public addPanel = (data: IPanelData) => {
        // TODO: Добавить новую пустую панель или панель по входным данным, если имеется data
    }

    public getPanels(): Panel[] {
        // TODO: Вернуть все панели на странице
        return [];
    }

    public getPanelById(id: number): Panel | undefined {
        //TODO: Вернуть панель по ID
        return this.panels.find(panel => panel.id === id);
    }
}