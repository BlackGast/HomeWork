import { IChoice } from "../../model/formElements/IChoice";
import { IQuestionData } from "../../model/IQuestionData";
import { Utils } from "../Utils";
import { QuestionBase } from "./QuestionBase";

export class QuestionChoice extends QuestionBase {
    public isMultiple: boolean;
    private _choices: IChoice[];

    constructor(data: IQuestionData) {
        super(data);
        this.type = 'Choice';
        this.title = data.title || '';
        this.readOnly = data.readOnly || false;
        this.isMultiple = true;
        this.answer = '';
        this._choices = this.createChoice(data.choices);
    }

    private createChoice(data: IChoice[]) {
        const choice: IChoice[] = [];
        if (data?.length) {
            for (const element of data) {
                const choiceObj: IChoice = {
                    id: Utils.generateGUID(),
                    title: element.title,
                    checked: element.checked,
                    disabled: element.disabled,
                }
                choice.push(choiceObj);
            }
        }
        return choice;
    }

    public override getValue() {
        let choices: IChoice[] = [];
        if (this._choices?.length) {
            choices = [...this._choices];
        }
        return choices;
    }

    public override setFieldByName(fieldName: string, newValue: any, index: number) {
        if (index >= 0 && index < this._choices.length) {
            const choice = this._choices[index];
            if (fieldName in choice) {
                choice[fieldName] = newValue;
            }
        }
    }

    public override setValue(newValue: any) {
        this.answer = newValue;
    }

    public addChoice() {
        const choiceObj: IChoice = {
            id: Utils.generateGUID(),
            title: '',
            checked: false,
            disabled: false,
        };
        this._choices.push(choiceObj);
    }
}