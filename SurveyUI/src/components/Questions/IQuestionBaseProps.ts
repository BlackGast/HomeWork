import { ISurveyModel } from "../../../../SurveyCore/src/model/ISurveyModel";
import { QuestionType } from "../../../../SurveyCore/src/model/QuestionType";

export interface IQuestionBaseProps {
  id: number;
  pageId: number;
  survey: ISurveyModel;
  deleteQuestion: (key?: number, pageId?: number) => void;
  editCurrentItem: (item?: string, pageId?: number, questionId?: number) => void;
  editCurrentPropertyItem: (
    title?: string,
    description?: string,
    required?: boolean,
    typeQuestion?: QuestionType,
    pageId?: number,
    questionId?: number
  ) => void;
}