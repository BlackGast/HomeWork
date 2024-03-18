import * as React from "react";
import { ISurveyModel } from "../../../../SurveyCore/src/model/ISurveyModel";
import { QuestionType } from "../../../../SurveyCore/src/model/QuestionType";
import { ICurrentItem } from "../../model/ICurrentItem";

export interface IListTabsProps {
  survey: ISurveyModel;
  currentItem: ICurrentItem;
  deleteQuestion: (key: number) => void;
  addQuestion: (key: QuestionType) => void;
  deletePage: (key: number) => void;
  addPage: () => void;
  saveModel: () => void;
  editCurrentItem: () => void;
}
