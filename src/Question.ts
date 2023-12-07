import { IQuestion } from "../model/IQuestion";
import { QuestionType } from "../model/QeustionType";
import { Survey } from "./Survey";

class Question {
    static questionData: Survey;

    public static updateQuestion = (newTitle?: string,
                                    newDescription?: string,
                                    newId?: number,
                                    newType?: QuestionType | string,
                                    newQuestion?: string,
                                    newOptions?: string[],
                                    newMin?: number,
                                    newMax?: number,
                                    newPlaceholder?: string) => {
        this.questionData.model.title = newTitle;
        this.questionData.model.description = newDescription;
        
    }
}