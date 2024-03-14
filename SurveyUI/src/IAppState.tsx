import * as React from "react";
import { ISurveyModel } from "../../SurveyCore/src/model/ISurveyModel";
import { ICurrentItem } from "./model/ICurrentItem";


export interface IAppState {
  survey: ISurveyModel;
  currentItem: ICurrentItem;
}