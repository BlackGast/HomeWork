import { QuestionType } from "./QeustionType";

export interface IQestion {
    id: number;
    type: QuestionType;
    question: string;
    options?: string[];
    min?: number;
    max?: number;
    placeholder?: string;
}