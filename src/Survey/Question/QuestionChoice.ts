import { IChoice } from "../../model/formElements/IChoice";
import { IQuestionData } from "../../model/IQuestionData";
import { QuestionBase } from "./QuestionBase";
import { v4 as uuidv4 } from 'uuid';

export class QuestionChoice extends QuestionBase {
    // Специфическое поле для этого типа вопроса. Остальные будут унаследованы из базового класса.
    public isMultiple: boolean;
    private _choices: IChoice[];

    constructor(data: IQuestionData) {
        super(data);
        this.type = 'Choice';
        this.title = '';
        this.readOnly = false;
        this.isMultiple = true;
        this._choices = this.createChoice(data.choices);
    }

    private createChoice(data: IChoice[]) {
        const choice: IChoice[] = [];
            if (data?.length) {
                for (let i = 0; i < data.length; i++) {
                    const choiceObj: IChoice = {
                        id: data[i].id,
                        title: data[i].title,
                        checked: data[i].checked,
                        disabled: data[i].disabled,
                    }
                    choice.push(choiceObj);
                }
            }
        return choice;
    }
    
    public override getValue() {
        // Вернуть текущие чойсы.
        /* 
        Соответственно, у других наследников базового вопроса будут свои специфические методы.
        Тут появляется вопрос о формате передачи значений. Можно использовать строчный JSON и строки, чтобы всегда
        считать результат строкой и парсить в нужный объект уже в UI Survey. Например, компонент с чекбоксами-чойсами
        будет парсить строчный JSON в JSON IChoice и выставлять нужные значения из получаемого объекта с известными полями.
        В случае записи значения в модель будет применяться локальный метод setValue, который распарсит входную строку
        в необходимый формат.
        */
       return this._choices
    }

    public override setValue(newValue: any) {
        // Записать новые чойсы
        this._choices = newValue;
    }
}