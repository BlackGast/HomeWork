import * as React from "react";
import "../Question.scss";
import { DefaultButton, IconButton, TextField } from "@fluentui/react";
import { editPen, trashCan } from "../../IProps/IIconProps";
import { ITextQuestionPreviewProps } from "./ITextQuestionPreview";

export class TextQuestionPreview extends React.Component<ITextQuestionPreviewProps> {

  private requiredSymbol(): React.ReactNode {
    if (
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].required === false
    ) {
      return <></>;
    }
    if (
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].required === true
    ) {
      return <> *</>;
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
              {this.requiredSymbol()}
            </label>
          </div>
          <div className="question-label_type">Тип: Text question</div>
        </div>
        <div><TextField id="answer"/></div>
      </div>
    );
  }
}
