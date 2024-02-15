import {
  Checkbox,
  DefaultButton,
  IStackStyles,
  Label,
} from "@fluentui/react";
import React from "react";
import { trashCan } from "../../App";

export class CheckboxQuestion extends React.Component {
  public render(): React.ReactNode {
    const styleCheckbox: Partial<IStackStyles> = {
      root: {
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center",
      },
    };
    return (
      <div className="container_page_question">
        <Label>Вопрос</Label>
        <Checkbox label="ответ" />
        <div className="question_settings">
          <Checkbox label="Обязательный" styles={styleCheckbox} />
          <DefaultButton text="Удалить" iconProps={trashCan} />
        </div>
      </div>
    );
  }
}
