import * as React from "react";
import "../Question.scss";
import { TextField } from "@fluentui/react";
import { ITextQuestionPreviewProps } from "./ITextQuestionPreview";

export class TextQuestionPreview extends React.Component<ITextQuestionPreviewProps> {
  private requiredTextField(): React.ReactNode {
    if (
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].required === false
    ) {
      return <TextField id="answer" />;
    }
    if (
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].required === true
    ) {
      return <TextField id="answer" required />;
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
