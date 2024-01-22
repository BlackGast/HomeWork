import { IQuestionData } from "../../model/IQuestionData";
import { ISelectAnswer } from "../../model/formElements/ISelectAnswer";
import { QuestionBase } from "./QuestionBase";

export class QuestionSelect extends QuestionBase {
    private _selects: ISelectAnswer[];

    constructor (data: IQuestionData) {
        super(data);
        this.type = 'Select';
        this.title = data.title || '';
        this.description = data.description || '';
        this.answer = '';
        this.readOnly = data.readOnly || false;
        this._selects = this.createSelect(data.selects)
    }

    private createSelect(data: ISelectAnswer[]) {
        const select: ISelectAnswer[] = [];
        if (data?.length) {
            for (let i = 0; i < data.length; i++) {
                const selectObj: ISelectAnswer = {
                    id: data[i].id,
                    title: data[i].title,
                    checked: data[i].checked,
                    selected: data[i].selected,
                }
                select.push(selectObj);
            }
        }
        return select; 
    }

    public override getValue() {
        return this._selects;
    }

    public setValue(newValue: any) {
        this._selects = newValue;
    }
}