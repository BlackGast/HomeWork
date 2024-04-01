import { DefaultButton, IconButton, Label } from "@fluentui/react";
import React from "react";
import "../Question.scss";
import { ICheckboxQuestionProps } from "./ICheckboxQuestionProps";
import { IChoice } from "../../../../../SurveyCore/src/model/formElements/IChoice";
import { CommandBarProperties } from "../../CommandBarProperties/CommandBarProperties";

export class CheckboxQuestion extends React.Component<ICheckboxQuestionProps> {
  private delete = () => {
    this.props.deleteQuestion(this.props.id, this.props.pageId);
  };
  private outputSelects(): React.ReactNode {
    const elementsPull: IChoice[] = this.props.survey.pages[
      this.props.pageId
    ].panels[0].questions[this.props.id].getValue() as IChoice[];

    return (
      <>
        {elementsPull.map((element: IChoice) => (
          <div key={element.id}>{element.title}</div>
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
          <div className="question-label_type">Тип: Checkbox question</div>
        </div>
        {this.outputSelects()}
        <div className="question_settings">
        <CommandBarProperties
            item="question"
            itemQuestion="Select"
            survey={this.props.survey}
            pageId={this.props.pageId}
            questionId={this.props.id}
            deleteQuestion={this.delete}
            deletePage={this.delete}
            editCurrentItem={this.props.editCurrentItem}
            editCurrentPropertyItem={this.props.editCurrentPropertyItem}
            addPage={this.delete}
          />
          {/* <DefaultButton
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
          /> */}
        </div>
      </div>
    );
  }
}
