import { IAnswerModel } from "./AnswerModel/model/IAnswerModel";

export interface IPagePreviewSurveyState {
    currentPage: number;
    answerModel: IAnswerModel;
    answer: string;
}