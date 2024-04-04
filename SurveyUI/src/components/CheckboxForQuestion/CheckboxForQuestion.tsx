import { Checkbox } from "@fluentui/react";
import React from "react";
import { ICheckboxForQuestionProps } from "./ICheckboxForQuestionProps";
import { ICheckboxForQuestionState } from "./ICheckboxForQuestionState";

export class CheckboxForQuestion extends React.Component<
  ICheckboxForQuestionProps,
  ICheckboxForQuestionState
> {
  constructor(props: ICheckboxForQuestionProps) {
    super(props);
    this.state = {
      checked: this.props.checked,
    };
  }

  componentDidUpdate(prevProps: ICheckboxForQuestionProps): void {
    if (this.props.checked !== prevProps.checked) {
      this.setState({ checked: this.props.checked });
    }
  }

  public render(): React.ReactNode {
    if (this.state.checked === false) {
      return (
        <Checkbox
          label="Обязательно"
          checked={this.state.checked}
          onChange={() => {
            this.props.editCurrentRequiredItem(
              true,
              this.props.pageId,
              this.props.questionId
            );
            this.setState({
              checked: true,
            });
          }}
        />
      );
    }
    if (this.state.checked === true) {
      return (
        <Checkbox
          label="Обязательно"
          checked={this.state.checked}
          onChange={() => {
            this.props.editCurrentRequiredItem(
              false,
              this.props.pageId,
              this.props.questionId
            );
            this.setState({
              checked: false,
            });
          }}
        />
      );
    }
  }
}
