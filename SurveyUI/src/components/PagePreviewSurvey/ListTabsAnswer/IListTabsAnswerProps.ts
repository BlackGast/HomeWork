import { IEasyAnswerModel } from "../EasyAnswerModel/model/IEasyAnswerModel";
import { IAnswerModel } from "../AnswerModel/model/IAnswerModel";

export interface IListTabsAnswerProps {
    answerModel: IAnswerModel;
    easyAnswerModel: IEasyAnswerModel[];
}