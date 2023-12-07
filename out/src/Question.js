"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Question {
    static questionData;
    static updateQuestion = (newTitle, newDescription, newId, newType, newQuestion, newOptions, newMin, newMax, newPlaceholder) => {
        this.questionData.model.title = newTitle;
        this.questionData.model.description = newDescription;
    };
}
//# sourceMappingURL=Question.js.map