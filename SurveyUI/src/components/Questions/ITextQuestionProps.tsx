import { ISurveyModel } from "../../../../SurveyCore/src/model/ISurveyModel";

export interface ITextQuestionProps {
  id: number;
  survey: ISurveyModel;
  deleteQuestion: (key: number) => void;
}
