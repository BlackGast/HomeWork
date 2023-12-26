import { QuestionType } from "./QuestionType";

export interface IQuestionData {
    id: number;
    title: string;
    type: QuestionType;
    description?: string;
    disabled?: boolean;
    readOnly?: boolean;
    answer?: string;
    required?: boolean;
}