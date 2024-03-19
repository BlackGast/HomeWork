import * as React from "react";
import "./TextQuestion.scss";
import { DefaultButton, IconButton } from "@fluentui/react";
import { editPen, trashCan } from "../../IProps/IIconProps";
import { ITextQuestionProps } from "./ITextQuestionProps";

export class TextQuestion extends React.Component<ITextQuestionProps> {
  private delete = () => {
    this.props.deleteQuestion(this.props.id, this.props.pageId);
  };

  public render(): React.ReactNode {
    if (
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].required === false
    ) {
      return (
        <div className="container_page_question">
          <div className="question-label">
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
          <div className="question_settings">
            <DefaultButton
              text="Удалить"
              iconProps={trashCan}
              onClick={() => {
                this.delete();
              }}
            />
            <IconButton
              iconProps={editPen}
              onClick={() => {
                this.props.editCurrentItem(
                  "question",
                  this.props.pageId,
                  this.props.id
                );
              }}
            />
          </div>
        </div>
      );
    }
    if (
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].required === true
    ) {
      return (
        <div className="container_page_question">
          <div className="question-label">
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
              }{" "}
              *
            </label>
          </div>
          <div className="question_settings">
            <DefaultButton
              text="Удалить"
              iconProps={trashCan}
              onClick={() => {
                this.delete();
              }}
            />
            <IconButton
              iconProps={editPen}
              onClick={() => {
                this.props.editCurrentItem(
                  "question",
                  this.props.pageId,
                  this.props.id
                );
              }}
            />
          </div>
        </div>
      );
    }
  }
}
