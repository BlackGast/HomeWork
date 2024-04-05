import { Panel } from "./Panel";
import { IPage } from "./model/IPages";
import { IPanel } from "./model/IPanels";

export class Page {
    public title: string;
    public panels: Panel[];

    constructor(data: IPage) {
        this.title = data.title;
        this.panels = [];
    }

    public addPanel = (data: IPanel) => {
        const newPanel = new Panel(data);
        this.panels.push(newPanel);
    }
    
    public getPanels(): Panel[] {
        return this.panels;
    }
}