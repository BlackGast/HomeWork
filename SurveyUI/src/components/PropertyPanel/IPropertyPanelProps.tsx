import { ISurveyModel } from "../../../../SurveyCore/src/model/ISurveyModel";

export interface IPropertyPanelProps {
  survey: ISurveyModel;
  pageId: number;
  questionId: number;
  item: string;
  saveModel: () => void;
}
