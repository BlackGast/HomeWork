import { ISurveyModel } from "../../../../SurveyCore/src/model/ISurveyModel";
import { IAnswerModel } from "../PagePreviewSurvey/AnswerModel/model/IAnswerModel";
import { IEasyAnswerModel } from "../PagePreviewSurvey/EasyAnswerModel/model/IEasyAnswerModel";
import { IEasyModel } from "../PagePreviewSurvey/EasyAnswerModel/model/IEasyModel";

export interface IQuestionPreviewBaseProps {
    id: number;
    pageId: number;
    survey: ISurveyModel;
    answerModel: IEasyModel;
    setAnswer: (
        pageId?: number,
        QuestionId?: number,
        answer?: string,
        id?: string
    ) => void;
}