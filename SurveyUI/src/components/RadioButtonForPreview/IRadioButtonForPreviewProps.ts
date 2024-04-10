import { ISurveyModel } from "../../../../SurveyCore/src/model/ISurveyModel";
import { IAnswerModel } from "../PagePreviewSurvey/AnswerModel/model/IAnswerModel";

export interface IRadioButtonForPreviewProps {
    survey: ISurveyModel;
    items: any;
    setAnswer: (pageId: number, questionId: number, answer: string) => void;
    pageId: number;
    questionId: number;
    answerModel: IAnswerModel;
}