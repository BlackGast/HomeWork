import { QuestionType } from "../../../../SurveyCore/src/model/QuestionType";


export interface IButtonAddQuestionProps {
  addQuestion: (key: QuestionType, page: number) => void;
  refresh?: () => void;
  pageIndex?: number;
}
