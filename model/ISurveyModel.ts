import { IQestion } from "./IQuestion";

export interface ISurveyModel {
    tests: string;
    description: string;
    questions: IQestion[];
}