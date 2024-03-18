import * as React from "react";
import { ISurveyModel } from "../../../../SurveyCore/src/model/ISurveyModel";
import { QuestionType } from "../../../../SurveyCore/src/model/QuestionType";

export interface ISurveyPageProps {
  survey: ISurveyModel;
  questions: React.ReactNode[];
  addQuestion: (key: QuestionType) => void;
  deleteQuestion: (key: number) => void;
  deletePage: (key: number) => void;
  addPage: () => void;
  editCurrentItem: (item?:string, pageId?: number, questionId?: number) => void;
}
