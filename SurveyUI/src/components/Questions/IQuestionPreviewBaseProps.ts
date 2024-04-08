import { ISurveyModel } from "../../../../SurveyCore/src/model/ISurveyModel";
import { IAnswerModel } from "../PagePreviewSurvey/AnswerModel/model/IAnswerModel";

export interface IQuestionPreviewBaseProps {
    id: number;
    pageId: number;
    survey: ISurveyModel;
    answerModel: IAnswerModel;
    setAnswer: (
        pageId?: number,
        QuestionId?: number,
        answer?: string
    ) => void
}