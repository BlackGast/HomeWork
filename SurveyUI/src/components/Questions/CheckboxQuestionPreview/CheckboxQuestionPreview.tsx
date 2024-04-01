import React from "react";
import { ICheckboxQuestionPreviewProps } from "./ICheckboxQuestionPreviewProps";
import { Checkbox, Label, Stack } from "@fluentui/react";

export class CheckboxQuestionPreview extends React.Component<ICheckboxQuestionPreviewProps> {
  private outputSelects(): React.ReactNode {
    const elementsPull: any =
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].getValue();

    const stackTokens = { childrenGap: 10 };
    return (
      <Stack tokens={stackTokens} style={{ paddingLeft: "10px" }}>
        {elementsPull.map((element: any) => (
          <Checkbox key={element.id} label={element.title} />
        ))}
      </Stack>
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
      </div>
    );
  }
}
