import * as React from "react";
import "../Question.scss";
import { DefaultButton, IconButton } from "@fluentui/react";
import { editPen, trashCan } from "../../IProps/IIconProps";
import { ITextQuestionProps } from "./ITextQuestionProps";

export class TextQuestion extends React.Component<ITextQuestionProps> {
  private delete = () => {
    this.props.deleteQuestion(this.props.id, this.props.pageId);
  };

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
