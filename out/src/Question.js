"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
class Question {
    id;
    type;
    question;
    options;
    min;
    max;
    placeholder;
    updateQuestion(data) {
        this.id = data.id;
        this.type = data.type;
        this.question = data.question;
        this.options = data.options;
        this.min = data.min;
        this.max = data.max;
        this.placeholder = data.placeholder;
    }
    updateQuestionProperty(value, propertyName) {
        this[propertyName] = value;
    }
}
exports.Question = Question;
//const tmp = new Question ()
//# sourceMappingURL=Question.js.map