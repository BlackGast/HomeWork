import { IQuestionData } from "./IQuestionData";

export interface IPanelData{
    order: string;
    id: number;
    title: string;
    description: string;
    questions: IQuestionData[];
}