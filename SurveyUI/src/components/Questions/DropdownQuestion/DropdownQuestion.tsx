import React from "react";
import { IDropdownQuestionProps } from "./IDropdownQuestionProps";
import {
  Dropdown,
  IDropdownOption,
  IDropdownStyles,
  Label,
} from "@fluentui/react";
import { CommandBarProperties } from "../../CommandBarProperties/CommandBarProperties";

export class DropdownQuestion extends React.Component<IDropdownQuestionProps> {
  private questions =
    this.props.survey.pages[this.props.pageId].panels[0].questions[
      this.props.id
    ];
  private delete = () => {
    this.props.deleteQuestion(this.props.id, this.props.pageId);
  };

  private dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 300 },
  };

  private options: IDropdownOption[] = [];

  private renderDropdown(): React.ReactNode {
    return (
      <Dropdown
        placeholder="Select an option"
        label="Basic uncontrolled example"
        options={this.options}
        styles={this.dropdownStyles}
      />
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
        <Label id="questionName" required className="question-label_title_name">
          {this.questions.title}
        </Label>
      );
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
          <div className="question-label_type">Тип: Text question</div>
        </div>
        {/* {this.renderDropdown()} */}
        <div className="question_settings">
          <CommandBarProperties
            item="question"
            itemQuestion="Dropdown"
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
