import { IPanelData } from "./IPanelData";

export interface IPageData {
    id: string;
    description: string;
    panels: IPanelData[];
    title: string;
}