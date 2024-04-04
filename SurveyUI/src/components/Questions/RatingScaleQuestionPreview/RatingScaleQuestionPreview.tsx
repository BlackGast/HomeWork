import React from "react";
import "../Question.scss";
import { IRatingScaleQuestionPreviewProps } from "./IRatingScaleQuestionPreviewProps";
import { Label } from "@fluentui/react";

export class RatingScaleQuestionPreview extends React.Component<IRatingScaleQuestionPreviewProps> {
  private ratingNum(): React.ReactNode {
    const maxValue: number =
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].getPropertyByName("maxNum");
    const itemPull: React.ReactNode[] = [];
    for (let i = 0; i < maxValue; i++) {
      const element: React.ReactNode = <>{i + 1}</>;
      itemPull.push(element);
    }
    return (
      <>
        {itemPull.map((element, index) => (
          <button className="question_number-items_item" key={index}>
            {element}
          </button>
          // <div className="question_number-items_item" key={index}>
          //   {element}
          // </div>
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
        <Label id="questionName" className="question-label_title_name">
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
        <Label id="questionName" className="question-label_title_name" required>
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
          <div className="question-label_type">Тип: Rating scale question</div>
        </div>
        <div className="question_number-items">{this.ratingNum()}</div>
      </div>
    );
  }
}
