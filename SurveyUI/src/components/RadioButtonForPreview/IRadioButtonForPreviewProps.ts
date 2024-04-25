import { ISurveyModel } from "../../../../SurveyCore/src/model/ISurveyModel";
import { IAnswerModel } from "../PagePreviewSurvey/AnswerModel/model/IAnswerModel";
import { IEasyModel } from "../PagePreviewSurvey/EasyAnswerModel/model/IEasyModel";

export interface IRadioButtonForPreviewProps {
    survey: ISurveyModel;
    items: any;
    setAnswer: (pageId: number, questionId: number, answer: string) => void;
    pageId: number;
    questionId: number;
    answerModel: IEasyModel;
}