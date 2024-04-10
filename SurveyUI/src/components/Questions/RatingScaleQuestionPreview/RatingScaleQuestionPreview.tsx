import React from "react";
import "../Question.scss";
import { IRatingScaleQuestionPreviewProps } from "./IRatingScaleQuestionPreviewProps";
import { Label } from "@fluentui/react";

export class RatingScaleQuestionPreview extends React.Component<IRatingScaleQuestionPreviewProps> {
  private questions =
    this.props.survey.pages[this.props.pageId].panels[0].questions[
      this.props.id
    ];
  private ratingNum(): React.ReactNode {
    const maxValue: number = this.questions.getPropertyByName("maxNum");
    const itemPull: React.ReactNode[] = [];
    for (let i = 0; i < maxValue; i++) {
      const element: React.ReactNode = <>{i + 1}</>;
      itemPull.push(element);
    }
    return (
      <>
        {itemPull.map((element, index) => (
          <button
            className="question_number-items_item"
            key={index}
            onClick={(e) => {
              this.props.setAnswer(
                this.props.pageId,
                this.props.id,
                e.currentTarget.textContent ?? ""
              );
            }}
          >
            {element}
          </button>
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
