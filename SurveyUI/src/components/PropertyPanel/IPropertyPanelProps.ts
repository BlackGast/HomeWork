import { ISurveyModel } from "../../../../SurveyCore/src/model/ISurveyModel";
import { ICurrentPropertyItem } from "../../model/ICurrentPropertyItem";

export interface IPropertyPanelProps {
  survey: ISurveyModel;
  pageId: number;
  questionId: number;
  item: string;
  propertyItem: ICurrentPropertyItem;
  saveModel: () => void;
}
