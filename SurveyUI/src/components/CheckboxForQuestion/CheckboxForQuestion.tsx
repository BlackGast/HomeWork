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
            this.props.survey.pages[this.props.pageId].panels[0].questions[
              this.props.questionId
            ].required = true;
          }}
        />
      );
    } 
    if (this.props.checked === true) {
      return (
        <Checkbox
          label="Обязательно"
          defaultChecked={true}
          onChange={() => {
            // console.log("click");
            this.props.survey.pages[this.props.pageId].panels[0].questions[
              this.props.questionId
            ].required = false;
          }}
        />
      );
    }
  }
}
