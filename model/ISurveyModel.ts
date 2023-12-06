import { IQestion } from "./IQuestion";

// Интерфейс модели опроса

export interface ISurveyModel {
    tests: string;
    description: string;
    questions: IQestion[];
}