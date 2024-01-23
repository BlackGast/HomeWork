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
        let selects: ISelectAnswer[] = [];
        if (this._selects?.length) {
            selects = [...this._selects]
        }
        return selects;
    }

    public override setFieldByName (fieldName: string, newValue: any, index: number) {
        if (index >= 0 && index < this._selects.length) {
            const choice = this._selects[index];
            if (fieldName in choice) {
                choice[fieldName] = newValue;
            }
        }
        //this._choices[index][fieldName as keyof IChoice] = newValue;
    }

    public setValue(newValue: any) {
        this.answer = newValue;
    }
}