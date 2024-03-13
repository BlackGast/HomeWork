import * as React from "react";
import { ISurveyModel } from "../../../../SurveyCore/src/model/ISurveyModel";
import { QuestionType } from "../../../../SurveyCore/src/model/QuestionType";

export interface IListTabsProps {
  survey: ISurveyModel;
  questions: React.ReactNode[];
  deleteQuestion: (key: number) => void;
  addQuestion: (key: QuestionType) => void;
  deletePage: (key: number) => void;
  addPage: () => void;
  saveModel: () => void;
}
