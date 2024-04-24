import React from "react";
import { ICheckboxQuestionPreviewProps } from "./ICheckboxQuestionPreviewProps";
import { Checkbox, Label, Stack } from "@fluentui/react";
import { IChoice } from "../../../../../SurveyCore/src/model/formElements/IChoice";

export class CheckboxQuestionPreview extends React.Component<ICheckboxQuestionPreviewProps> {
  private questions =
    this.props.survey.pages[this.props.pageId].panels[0].questions[
      this.props.id
    ];
  private outputSelects(): React.ReactNode {
    const elementsPull: IChoice[] = this.questions.getValue() as IChoice[];
    const stackTokens = { childrenGap: 10 };
    return (
      <Stack tokens={stackTokens} style={{ paddingLeft: "10px" }}>
        {elementsPull.map((element: IChoice) => (
          <Checkbox
            key={element.id}
            label={element.title}
            onChange={() => {
              if (
                this.props.answerModel.pages[this.props.pageId].panels[0]
                  .questions[this.props.id].answer === "Нет ответа"
              ) {
                this.props.setAnswer(this.props.pageId, this.props.id, " ");
              }
              this.props.addChoices(
                this.props.pageId,
                this.props.id,
                element.title
              );
            }}
          />
        ))}
      </Stack>
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
        {this.outputSelects()}
      </div>
    );
  }
}
