import React from "react";
import "../Question.scss";
import { IRatingScaleQuestionPreviewProps } from "./IRatingScaleQuestionPreviewProps";

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
          <div className="question_number-items_item" key={index}>
            {element}
          </div>
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
              }{" "}
              {this.requiredSymbol()}
            </label>
          </div>
          <div className="question-label_type">Тип: Rating scale question</div>
        </div>
        <div className="question_number-items">{this.ratingNum()}</div>
        
      </div>
    );
  }
}
