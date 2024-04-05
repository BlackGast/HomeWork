import { IQuestion } from "./IQuestion";

export interface IPanel {
    title: string;
    questions: IQuestion[];
}