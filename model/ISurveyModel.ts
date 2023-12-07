import { IQuestion } from "./IQuestion";

// Интерфейс модели опроса

export interface ISurveyModel {
    title: string;
    description: string;
    questions: IQuestion[];
}