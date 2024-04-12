import { IQuestionPreviewBaseProps } from "../IQuestionPreviewBaseProps";

export interface ICheckboxQuestionPreviewProps extends IQuestionPreviewBaseProps {
    addChoices: (
        pageId?: number,
        QuestionId?: number,
        answer?: string
    ) => void;
    delChoice: (
        pageId?: number,
        QuestionId?: number
    ) => void;
}