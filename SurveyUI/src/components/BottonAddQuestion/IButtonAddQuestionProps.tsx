import { QuestionType } from "../../../../SurveyCore/src/model/QuestionType";

export interface IButtonAddQuestionProps {
  addQuestion: (key: QuestionType, page: number) => void;
  pageIndex?: number;
}
