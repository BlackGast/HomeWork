import {
  Checkbox,
  DefaultButton,
  IStackStyles,
  IconButton,
  Label,
} from "@fluentui/react";
import React from "react";
import { circlePlus, editPen, trashCan } from "../../IProps/IIconProps";
import { ICheckboxQuestionProps } from "./ICheckboxQuestionProps";
import { ISelectAnswer } from "../../../../../SurveyCore/src/model/formElements/ISelectAnswer";

export class CheckboxQuestion extends React.Component<ICheckboxQuestionProps> {
  private addCheckbox(): void {
    this.props.survey.pages[this.props.pageId].panels[0].questions[
      this.props.id
    ].addChoice();
  }
  private outputSelects(): React.ReactNode {
    const tmp: any =
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].getValue();

    return (
      <>
        {tmp.map((elements: any, index: number) => (
          <div key={index}>{elements.title}</div>
        ))}
      </>
    );
  }

  public render(): React.ReactNode {
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
        {this.outputSelects()}
        <IconButton
          iconProps={circlePlus}
          onClick={() => {
            this.addCheckbox();
            console.log(
              this.props.survey.pages[this.props.pageId].panels[0].questions[
                this.props.id
              ].getValue()
            );
            // console.log(
            //   this.props.survey.pages[this.props.pageId].panels[0].questions
            // );
          }}
        />
        <div className="question_settings">
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
          <DefaultButton
            text="Удалить"
            iconProps={trashCan}
            onClick={() => {
              this.props.deleteQuestion(this.props.id, this.props.pageId);
            }}
          />
        </div>
      </div>
    );
  }
}
