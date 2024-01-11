import { QuestionType } from "./QuestionType";
import { IChoice } from "./formElements/IChoice";
import { ISelectAnswer } from "./formElements/ISelectAnswer";

export interface IQuestionData {
    id: number;
    title: string;
    type: QuestionType;
    description?: string;
    disabled?: boolean;
    readOnly?: boolean;
    answer?: string;
    required?: boolean;
    choices?: IChoice[];
    selects?: ISelectAnswer[];
}