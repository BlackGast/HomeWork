import { Question } from "./Question";

class Page {
    private title: string;
    private description: string;
    private question: Question;

    createModel(newTitle: string,
                newDescription: string,
                newQuestion: Question): void {
        this.title = newTitle;
        this.description= newDescription;
        this.question = newQuestion;
    }
}