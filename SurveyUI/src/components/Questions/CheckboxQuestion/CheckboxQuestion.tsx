import { DefaultButton, IconButton } from "@fluentui/react";
import React from "react";
import "../Question.scss";
import { editPen, trashCan } from "../../IProps/IIconProps";
import { ICheckboxQuestionProps } from "./ICheckboxQuestionProps";

export class CheckboxQuestion extends React.Component<ICheckboxQuestionProps> {
  private outputSelects(): React.ReactNode {
    const elementsPull: any =
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].getValue();

    return (
      <>
        {elementsPull.map((element: any, index: number) => (
          <div key={index}>{element.title}</div>
        ))}
      </>
    );
  }

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
          <div className="question-label_type">Тип: Checkbox question</div>
        </div>
        {this.outputSelects()}
        <div className="question_settings">
          <DefaultButton
            text="Удалить"
            iconProps={trashCan}
            onClick={() => {
              this.props.deleteQuestion(this.props.id, this.props.pageId);
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
              this.props.editCurrentPropertyItem(
                this.props.survey.pages[this.props.pageId].panels[0].questions[
                  this.props.id
                ].title,
                this.props.survey.pages[this.props.pageId].panels[0].questions[
                  this.props.id
                ].description,
                this.props.survey.pages[this.props.pageId].panels[0].questions[
                  this.props.id
                ].required,
                "Select",
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
