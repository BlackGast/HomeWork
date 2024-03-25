import { IQuestionData } from "../../../SurveyCore/src/model/IQuestionData";

export interface ICurrentPropertyItem {
    title: string;
    description: string;
    required: boolean;
    choices: string[]
}