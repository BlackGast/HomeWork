import * as React from "react";
import { ISurveyModel } from "../../../../SurveyCore/src/model/ISurveyModel";
import { QuestionType } from "../../../../SurveyCore/src/model/QuestionType";

export interface IPageDesignerSurveyProps {
  survey: ISurveyModel;
  questions: React.ReactNode[];
  addQuestion: (key: QuestionType) => void;
  deleteQuestion: (key: number) => void;
  deletePage: (key: number) => void;
  addPage: () => void;
  saveModel: () => void;
}
