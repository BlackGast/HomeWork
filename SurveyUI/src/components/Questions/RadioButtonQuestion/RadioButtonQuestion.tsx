import React from "react";
import "../Question.scss";
import { IRadioButtonQuestionProps } from "./IRadioButtonQuestionProps";
import { DefaultButton, IconButton, Label } from "@fluentui/react";
import { editPen, trashCan } from "../../IProps/IIconProps";
import { ISelectAnswer } from "../../../../../SurveyCore/src/model/formElements/ISelectAnswer";
import { CommandBarProperties } from "../../CommandBarProperties/CommandBarProperties";

export class RadioButtonQuestion extends React.Component<IRadioButtonQuestionProps> {
  private delete = () => {
    this.props.deleteQuestion(this.props.id, this.props.pageId);
  };
  private outputSelects(): React.ReactNode {
    const tmp: ISelectAnswer[] = this.props.survey.pages[
      this.props.pageId
    ].panels[0].questions[this.props.id].getValue() as ISelectAnswer[];

    return (
      <>
        {tmp.map((elements: ISelectAnswer, index: number) => (
          <div key={elements.id}>{elements.title}</div>
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
        {this.outputSelects()}
        <div className="question_settings">
        <CommandBarProperties
            item="question"
            itemQuestion="Choice"
            survey={this.props.survey}
            pageId={this.props.pageId}
            questionId={this.props.id}
            deleteQuestion={this.delete}
            deletePage={this.delete}
            editCurrentItem={this.props.editCurrentItem}
            editCurrentPropertyItem={this.props.editCurrentPropertyItem}
            addPage={this.delete}
          />
        </div>
      </div>
    );
  }
}
