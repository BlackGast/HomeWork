import React from "react";
import { ICheckboxQuestionPreviewProps } from "./ICheckboxQuestionPreviewProps";
import { Checkbox } from "@fluentui/react";

export class CheckboxQuestionPreview extends React.Component<ICheckboxQuestionPreviewProps> {
  private outputSelects(): React.ReactNode {
    const elementsPull: any =
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].getValue();

    return (
      <>
        {elementsPull.map((element: any, index: number) => (
          <Checkbox key={index} label={element.title} />
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
              }{this.requiredSymbol()}
            </label>
          </div>
          <div className="question-label_type">Тип: Checkbox question</div>
        </div>
        {this.outputSelects()}
      </div>
    );
  }
}
