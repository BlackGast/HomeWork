import React from "react";
import { IStackStyles, TextField, Label, Checkbox, DefaultButton } from "@fluentui/react";
import { ButtonDef, trashCan } from "../../App";

export class TextQuestion extends React.Component {

  private delete() {
    
  }

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
        <TextField />
        <div className="question_settings">
          <Checkbox label="Обязательный" styles={styleCheckbox} />
          <DefaultButton text="Удалить" iconProps={trashCan} onClick={this.delete} />
        </div>
      </div>
    );
  }
}
