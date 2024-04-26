import { IAnswerModel } from "./AnswerModel/model/IAnswerModel";
import { IEasyModel } from "./EasyAnswerModel/model/IEasyModel";

export interface IPagePreviewSurveyState {
    currentPage: number;
    // answerModel: IAnswerModel;
    answer: string;
    showModal: boolean;
    errorState: boolean;
    easyAnswerModel: IEasyModel;
}