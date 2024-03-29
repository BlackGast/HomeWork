import React from "react";
import "../Question.scss";
import { IRadioButtonQuestionPreviewProps } from "./IRadioButtonQuestionPreviewProps";
import { RadioButtonForPreview } from "../../RadioButtonForPreview/RadioButtonForPreview";
import { Label } from "@fluentui/react";

export class RadioButtonQuestionPreview extends React.Component<IRadioButtonQuestionPreviewProps> {
  private requiredSymbol(): React.ReactNode {
    if (
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].required === false
    ) {
      return (
        <Label
          id="questionName"
          className="question-label_title_name"
        >
          {
            this.props.survey.pages[this.props.pageId].panels[0].questions[
              this.props.id
            ].title
          }
        </Label>
      );
    }
    if (
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].required === true
    ) {
      return (
        <Label
          id="questionName"
          required
          className="question-label_title_name"
        >
          {
            this.props.survey.pages[this.props.pageId].panels[0].questions[
              this.props.id
            ].title
          }
        </Label>
      );
    }
  }

  public render(): React.ReactNode {
    return (
      <div className="container_page_question">
        <div className="question-label">
          <div className="question-label_title">
            {this.props.id + 1}
            {"."}
            {this.requiredSymbol()}
          </div>
          <div className="question-label_type">Тип: Radio button question</div>
        </div>
        <RadioButtonForPreview
          survey={this.props.survey}
          items={this.props.survey.pages[this.props.pageId].panels[0].questions[
            this.props.id
          ].getValue()}
        />
      </div>
    );
  }
}
