import { IPanel } from "./IPanels";

export interface IPage {
    id: string;
    title: string;
    panels: IPanel[];
}