import * as React from "react";
import { ISurveyModel } from "../../SurveyCore/src/model/ISurveyModel";


export interface IAppState {
  survey: ISurveyModel;
  questions: React.ReactNode[];
}
