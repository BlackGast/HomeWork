import { QuestionType } from "../../../../SurveyCore/src/model/QuestionType";


export interface IButtonAddQuestionProps {
  addQuestion: (key: QuestionType) => void;
  refresh?: () => void;
}
