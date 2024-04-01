import * as React from "react";
import "../Question.scss";
import { Label, TextField } from "@fluentui/react";
import { ITextQuestionPreviewProps } from "./ITextQuestionPreview";

export class TextQuestionPreview extends React.Component<ITextQuestionPreviewProps> {
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
          className="question-label_title_name"
          required
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
        </div>
        <div className="question-textfield">
          <TextField id="answer" />
        </div>
      </div>
    );
  }
}
