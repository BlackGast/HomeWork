import { Checkbox, IStackStyles, Label, TextField } from "@fluentui/react";
import React from "react";
import { ButtonDef, trashCan } from "../../App";

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
      <div className="container_page_text-question">
        <Label>Вопрос</Label>
        <Checkbox label="ответ" />
        <div className="question_settings">
          <Checkbox label="Обязательный" styles={styleCheckbox} />
          <ButtonDef title="Удалить" iconName={trashCan} />
        </div>
      </div>
    );
  }
}
