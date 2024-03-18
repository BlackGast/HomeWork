import { Checkbox } from "@fluentui/react";
import React from "react";
import { IQuestionCheckbox } from "./ICheckboxForQuestionProps";

export class CheckboxForQuestion extends React.Component<IQuestionCheckbox> {
  render(): React.ReactNode {
    if (this.props.checked === false) {
      return (
        <Checkbox
          label="Обязательно"
          onChange={() => {
            console.log(
              this.props.survey.pages[this.props.pageId].panels[0].questions[
                this.props.questionId
              ].required
            );
            this.props.survey.pages[this.props.pageId].panels[0].questions[
              this.props.questionId
            ].required = true;
            console.log(
              this.props.survey.pages[this.props.pageId].panels[0].questions[
                this.props.questionId
              ].required
            );
          }}
        />
      );
    } else {
      return (
        <Checkbox
          label="Обязательно"
          checked={true}
          onChange={() => {
            console.log("click");
          }}
        />
      );
    }
  }
}
