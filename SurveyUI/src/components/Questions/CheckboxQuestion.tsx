import {
  Checkbox,
  DefaultButton,
  IStackStyles,
  IconButton,
  Label,
} from "@fluentui/react";
import React from "react";
import { circlePlus, trashCan } from "../IProps/IIconProps";

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
        <CheckboxList/>
        <IconButton iconProps={circlePlus} />
        <div className="question_settings">
          <Checkbox label="Обязательный" styles={styleCheckbox} />
          <DefaultButton text="Удалить" iconProps={trashCan} />
        </div>
      </div>
    );
  }
}

export class CheckboxList extends React.Component {

  private items: React.ReactNode[] = [];
  
  public render(): React.ReactNode {
    const styleCheckboxes: Partial<IStackStyles> = {
      root: {
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center",
      },
    };
    return (
      <div>
        {this.items.map((item, index) => (
          <div
            key={index}
            id={index.toString()}
          >
            {item}
          </div>
        ))}
      </div>
    )
  }
}