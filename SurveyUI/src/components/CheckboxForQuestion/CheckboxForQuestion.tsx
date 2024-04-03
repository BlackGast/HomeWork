import { Checkbox } from "@fluentui/react";
import React, { ReactNode, cloneElement } from "react";
import { ICheckboxForQuestionProps } from "./ICheckboxForQuestionProps";
import { ICheckboxForQuestionState } from "./ICheckboxForQuestionState";
import { checkBox } from "../IProps/IIconProps";

export class CheckboxForQuestion extends React.Component<
  ICheckboxForQuestionProps,
  ICheckboxForQuestionState
> {
  constructor(props: ICheckboxForQuestionProps) {
    super(props);
    this.state = {
      checked: this.props.checked,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(): void {
    console.log("componentDidMount, CheckboxForQuestion");
    this.setState({ checked: this.props.checked });
  }

  componentDidUpdate(): void {
    console.log("componentDidUpdate, CheckboxForQuestion");
    // this.setState({ checked: this.props.checked });
    console.log(this.props);
  }

  private handleChange(
    ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
    checked?: boolean
  ): void {
    const required: boolean = checked ?? false;
    console.log(required);

    this.setState({ checked: required });
    this.props.editCurrentRequiredItem(
      required,
      this.props.pageId,
      this.props.questionId
    );
    console.log(checked);
  }

  public render(): React.ReactNode {
    if (this.props.checked === false) {
      return (
        <Checkbox
          label="Обязательно"
          checked={this.state.checked}
          onChange={this.handleChange}
          // onChange={(e) => {
          //   // this.props.editCurrentRequiredItem(
          //   //   true,
          //   //   this.props.pageId,
          //   //   this.props.questionId
          //   // );
          //   this.props.survey.pages[this.props.pageId].panels[0].questions[
          //     this.props.questionId
          //   ].required = true;
          //   this.setState({
          //     checked: true,
          //   });
          //   console.log(this.state.checked);
          // }}
        />
      );
    }
    if (this.props.checked === true) {
      return (
        <Checkbox
          label="Обязательно"
          checked={this.state.checked}
          onChange={this.handleChange}
          // onChange={(e) => {
          //   // this.props.editCurrentRequiredItem(
          //   //   false,
          //   //   this.props.pageId,
          //   //   this.props.questionId
          //   // );
          //   this.props.survey.pages[this.props.pageId].panels[0].questions[
          //     this.props.questionId
          //   ].required = false;
          //   this.setState({
          //     checked: false,
          //   });
          //   console.log(this.state.checked);
          // }}
        />
      );
    }
  }
}
