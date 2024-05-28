import { ISurveyModel } from "../../../../SurveyCore/src/model/ISurveyModel";
import { IChoice } from "../../../../SurveyCore/src/model/formElements/IChoice";
import { IEasyModel } from "../PagePreviewSurvey/EasyAnswerModel/model/IEasyModel";

export interface IRadioButtonForPreviewProps {
    survey: ISurveyModel;
    items: IChoice[];
    idStr: string;
    setAnswer: (answer: string, id: string) => void;
    easyModel: IEasyModel;
    pageId: number;
    questionId: number;
    // fillAnswer: () => string;
}