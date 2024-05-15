import { ISurveyModel } from "../../../../SurveyCore/src/model/ISurveyModel";

export interface IPagePreviewSurveyProps {
    survey: ISurveyModel;
    getModelJSON: () => void;
    // surveyModel: ISurveyModel;
}