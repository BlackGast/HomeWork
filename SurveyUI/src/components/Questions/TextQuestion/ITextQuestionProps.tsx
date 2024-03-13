import { ISurveyModel } from "../../../../../SurveyCore/src/model/ISurveyModel";

export interface ITextQuestionProps {
  id: number;
  pageId: number;
  survey: ISurveyModel;
  deleteQuestion: (key: number, pageId: number) => void;
  getItem: (id: number, pageId: number, item: string) => void;
  refreshState: () => void;
}
