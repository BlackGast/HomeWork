import { IconButton, Label } from "@fluentui/react";
import React from "react";
import "../Question.scss";
import { ICheckboxQuestionProps } from "./ICheckboxQuestionProps";
import { IChoice } from "../../../../../SurveyCore/src/model/formElements/IChoice";
import { CommandBarProperties } from "../../CommandBarProperties/CommandBarProperties";
import { down, up } from "../../IProps/IIconProps";

export class CheckboxQuestion extends React.Component<ICheckboxQuestionProps> {
  private questions =
    this.props.survey.pages[this.props.pageId].panels[0].questions[
    this.props.id
    ];
  private delete = () => {
    this.props.deleteQuestion(this.props.id, this.props.pageId);
  };
  private outputSelects(): React.ReactNode {
    const elementsPool: IChoice[] = this.questions.getValue() as IChoice[];

    return (
      <>
        {elementsPool.map((element: IChoice) => (
          <div key={element.id}>{element.title}</div>
        ))}
      </>
    );
  }

  private requiredSymbol(): React.ReactNode {
    if (this.questions.required === false) {
      return (
        <Label id="questionName" className="question-label_title_name">
          {this.questions.title}
        </Label>
      );
    }
    if (this.questions.required === true) {
      return (
        <Label id="questionName" className="question-label_title_name" required>
          {this.questions.title}
        </Label>
      );
    }
  }

  private renderNavButton(): React.ReactNode {
    if (this.props.currentItem) {
      if (
        this.props.currentItem.questionId === 0
        &&
        this.props.survey.pages[this.props.pageId].panels[0].questions.length !== 1) {
        return <div
          id={`idButtonContainer-${this.props.pageId}-${this.props.id}`}
          className="question_move-button-container hide">
          <IconButton
            iconProps={down}
            onClick={() => {
              this.props.swapQuestion(this.props.id, this.props.pageId, "down")
            }}
          />
        </div>
      }
      if (
        this.props.currentItem.questionId > 0
        &&
        this.props.currentItem.questionId < (this.props.survey.pages[
          this.props.pageId
        ].panels[0].questions.length - 1)) {
        return <div
          id={`idButtonContainer-${this.props.pageId}-${this.props.id}`}
          className="question_move-button-container hide">
          <IconButton
            iconProps={up}
            onClick={() => {
              this.props.swapQuestion(this.props.id, this.props.pageId, "up")
            }}
          />
          <IconButton
            iconProps={down}
            onClick={() => {
              this.props.swapQuestion(this.props.id, this.props.pageId, "down")
            }}
          />
        </div>
      }
      if (
        this.props.currentItem.questionId === (this.props.survey.pages[
          this.props.pageId
        ].panels[0].questions.length - 1)
        &&
        this.props.survey.pages[
          this.props.pageId
        ].panels[0].questions.length !== 1) {
        return <div
          id={`idButtonContainer-${this.props.pageId}-${this.props.id}`}
          className="question_move-button-container hide">
          <IconButton
            iconProps={up}
            onClick={() => {
              this.props.swapQuestion(this.props.id, this.props.pageId, "up")
            }}
          />
        </div>
      }
    }
  }

  public render(): React.ReactNode {
    return (
      <div
        className="container_page_question ms-depth-4"
        id={`question-${this.props.pageId}-${this.props.id}`}
      >
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
          {this.renderNavButton()}
          <CommandBarProperties
            item="question"
            itemQuestion="Select"
            survey={this.props.survey}
            pageId={this.props.pageId}
            questionId={this.props.id}
            deleteQuestion={this.delete}
            editCurrentItem={this.props.editCurrentItem}
            editCurrentPropertyItem={this.props.editCurrentPropertyItem}
            currentItem={this.props.currentItem}
          />
        </div>
      </div>
    );
  }
}
