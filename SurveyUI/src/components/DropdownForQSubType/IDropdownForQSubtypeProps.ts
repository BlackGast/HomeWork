import { ISurveyModel } from "../../../../SurveyCore/src/model/ISurveyModel";

export interface IDropdownForQSubtypeProps {
    survey: ISurveyModel;
    pageId: number;
    questionId: number;
    setSubType: (
        pageId?: number,
        questionId?: number,
        subType?: string
      ) => void;
}