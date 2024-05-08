import {
  Dropdown,
  IDropdownOption,
  IDropdownStyles,
  Label,
} from "@fluentui/react";
import React from "react";
import { IDropdownQuestionPreviewProps } from "./IDropdownQuestionPreview";
import { ISelectAnswer } from "../../../../../SurveyCore/src/model/formElements/ISelectAnswer";

export class DropdownQuestionPreview extends React.Component<IDropdownQuestionPreviewProps> {
  private questions =
    this.props.survey.pages[this.props.pageId].panels[0].questions[
      this.props.id
    ];
  private answerPool = this.questions.getValue() as ISelectAnswer[];
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
        <Label id="questionName" required className="question-label_title_name">
          {this.questions.title}
        </Label>
      );
    }
  }

  private dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: {
      width: 300,
      marginLeft: "auto",
      marginRight: "auto",
    },
  };

  private answerPush(): IDropdownOption[] {
    let elements: IDropdownOption[] = [];
    this.answerPool.map((element) => {
      const item: IDropdownOption = {
        key: element.title.toLocaleLowerCase(),
        text: element.title,
      };
      elements.push(item);
    });
    return elements;
  }

  private options: IDropdownOption[] = this.answerPush();

  private renderDropdown(): React.ReactNode {
    return (
      <Dropdown
        placeholder="Select an option"
        options={this.options}
        styles={this.dropdownStyles}
        onChange={(e) => {
            this.props.setAnswer(
                e.currentTarget.childNodes[0].textContent || undefined,
                this.props.idStr
            )            
        }}
      />
    );
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
        </div>
        {this.renderDropdown()}
      </div>
    );
  }
}
