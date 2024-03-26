import { Checkbox } from "@fluentui/react";
import React from "react";
import { IQuestionCheckbox } from "./ICheckboxForQuestionProps";

export class CheckboxForQuestion extends React.Component<IQuestionCheckbox> {
  render(): React.ReactNode {
    if (
      this.props.checked === false
    ) {
      return (
        <Checkbox
          label="Обязательно"
          checked={false}
          onChange={() => {
            this.props.survey.pages[this.props.pageId].panels[0].questions[
              this.props.questionId
            ].required = true;
            this.props.editCurrentRequiredItem(true);
          }}
        />
      );
    }
    if (
      this.props.checked === true
    ) {
      return (
        <Checkbox
          label="Обязательно"
          checked={true}
          onChange={() => {
            this.props.survey.pages[this.props.pageId].panels[0].questions[
              this.props.questionId
            ].required = false;
            this.props.editCurrentRequiredItem(false);
          }}
        />
      );
    }
  }
}
