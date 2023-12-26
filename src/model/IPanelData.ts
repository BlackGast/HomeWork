import { IQuestionData } from "./IQuestionData";

export interface IPanelData{
    id: number;
    title: string;
    description: string;
    questions: IQuestionData[];
}