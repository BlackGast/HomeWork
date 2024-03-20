import { ISurveyModel } from "../../../../SurveyCore/src/model/ISurveyModel";

export interface IQuestionBaseProps {
  id: number;
  pageId: number;
  survey: ISurveyModel;
  deleteQuestion: (key: number, pageId: number) => void;
  editCurrentItem: (item:string, pageId: number, questionId: number) => void;
}