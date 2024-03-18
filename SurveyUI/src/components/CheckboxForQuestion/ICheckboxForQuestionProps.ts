import { ISurveyModel } from "../../../../SurveyCore/src/model/ISurveyModel";

export interface IQuestionCheckbox {
    checked: boolean;
    survey: ISurveyModel;
    pageId: number;
    questionId: number;
}