import { ISurveyModel } from "../../../../SurveyCore/src/model/ISurveyModel";
import { ISelectAnswer } from "../../../../SurveyCore/src/model/formElements/ISelectAnswer";
import { IEasyModel } from "../PagePreviewSurvey/EasyAnswerModel/model/IEasyModel";

export interface IRadioButtonForPreviewProps {
    survey: ISurveyModel;
    items: ISelectAnswer[];
    idStr: string;
    setAnswer: (answer: string, id: string) => void;
    easyModel: IEasyModel;
    pageId: number;
    questionId: number;
}