import React from "react";
import "../Question.scss";
import { IDateQuestionPreviewProps } from "./IDateQuestionPreviewProps";
import { TextField } from "@fluentui/react";

export class DateQuestionPreview extends React.Component<IDateQuestionPreviewProps> {
  private requiredTextField(): React.ReactNode {
    if (
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].required === false
    ) {
      return <TextField id="answer" type="date" />;
    }
    if (
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].required === true
    ) {
      return <TextField id="answer" required type="date" />;
    }
  }

  public render(): React.ReactNode {
    return (
      <div className="container_page_question">
        <div className="question-label">
          <div className="question-label_title">
            {this.props.id + 1}.
            <label
              id="questionName"
              style={{
                backgroundColor: "#f5f5f5",
                fontSize: 14,
              }}
            >
              {
                this.props.survey.pages[this.props.pageId].panels[0].questions[
                  this.props.id
                ].title
              }
            </label>
          </div>
        </div>
        <div className="question-textfield">{this.requiredTextField()}</div>
      </div>
    );
  }
}
