import { ISurveyModel } from "../../../../SurveyCore/src/model/ISurveyModel";

export interface IQuestionPreviewBaseProps {
    id: number;
    pageId: number;
    survey: ISurveyModel;
}