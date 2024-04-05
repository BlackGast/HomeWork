import { IPanel } from "./IPanels";

export interface IPage {
    title: string;
    panels: IPanel[];
}