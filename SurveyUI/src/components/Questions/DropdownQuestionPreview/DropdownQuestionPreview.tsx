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
    dropdown: { width: 300 },
  };

  private options: IDropdownOption[] = [];

  private renderDropdown(): React.ReactNode {
    this.answerPool.map((element) => {
        const item: IDropdownOption = {
          key: element.id,
          text: element.title,
        };
        this.options.push(item);
      });
    return (
      <Dropdown
        placeholder="Select an option"
        options={this.options}
        styles={this.dropdownStyles}
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
        {/* {this.outputSelects()} */}
      </div>
    );
  }
}
