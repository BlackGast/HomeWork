import { QuestionType } from "./QeustionType";

// Интерфейс модели вопроса, где есть необязательные части

export interface IQestion {
    id: number;
    type: QuestionType;
    question: string;
    options?: string[];
    min?: number;
    max?: number;
    placeholder?: string;
}