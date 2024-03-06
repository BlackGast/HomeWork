import * as React from "react";
import "./TextQuestion.scss";
import {
  IStackStyles,
  TextField,
  Label,
  Checkbox,
  DefaultButton,
} from "@fluentui/react";
import { trashCan } from "../IProps/IIconProps";
import { ITextQuestionProps } from "./ITextQuestionProps";

export class TextQuestion extends React.Component<ITextQuestionProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      key: 0,
    };
  }

  private delete = () => {
    this.props.deleteQuestion(this.props.id);
    console.log();
  };

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
        <div className="question-label">
          {this.props.id + 1}.
          <TextField
            borderless
            placeholder="Название вопроса"
            style={{
              backgroundColor: "#f5f5f5",
              fontSize: 15,
            }}
          />
        </div>
        <div className="question_settings">
          <DefaultButton
            text="Удалить"
            iconProps={trashCan}
            // id={this.props.id}
            onClick={() => {
              this.delete();
            }}
          />
        </div>
      </div>
    );
  }
}
