import React from "react";
import {
  IStackStyles,
  TextField,
  Label,
  Checkbox,
  DefaultButton,
} from "@fluentui/react";
import { Page, trashCan } from "../../App";

export class TextQuestion extends React.Component {
  private delete(index: number) {
    Page.handleDeleteQuestion(index);
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
        <TextField
          borderless
          placeholder="Название вопроса"
          style={{
            backgroundColor: "#f5f5f5",
            fontSize: 15,
          }}
        />
        <Label>Вопрос</Label>
        <div style={{
          width: "80%",
          alignContent: "center" //поправить
          }}>
          <TextField />
        </div>
        <div className="question_settings">
          <Checkbox label="Обязательный" styles={styleCheckbox} />
          <DefaultButton
            text="Удалить"
            iconProps={trashCan}
            onClick={(event) => {
              this.delete(0);
              console.log(this.props);
            }}
          />
        </div>
      </div>
    );
  }
}
