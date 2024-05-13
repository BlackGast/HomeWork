import React from "react";
import "../Question.scss";
import { Label } from "@fluentui/react";
import { IRangingQuestionPreviewProps } from "./IRangingQuestionPreviewProps";
import { ISelectAnswer } from "../../../../../SurveyCore/src/model/formElements/ISelectAnswer";

export class RangingQuestionPreview extends React.Component<IRangingQuestionPreviewProps> {
  private questions =
    this.props.survey.pages[this.props.pageId].panels[0].questions[
      this.props.id
    ];
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
  //   private answerPool: string[] = [];
  private outputAnswers(): React.ReactNode {
    // let item = (event: any) => {
    //   console.log(event.target);
    //   return event.target
    // }
    const item = document.querySelector(".ranging-question_item hovered")

    const placeholders = document.querySelectorAll(".ranging-question_item");

    if (item) {
      item.addEventListener("dragstart", dragStart);
      item.addEventListener("dragend", dragEnd);
    }

    for (const placeholder of placeholders) {
      placeholder.addEventListener("dragover", dragOver);
      placeholder.addEventListener("dragenter", dragEnter);
      placeholder.addEventListener("dragleave", dragLeave);
      placeholder.addEventListener("drop", dragDrop);
    }

    function dragStart(event: any) {
      event.target.classList.add("hold");
      setTimeout(() => {
        event.target.classList.add("hide"), 0;
      });
    }

    function dragEnd(event: any) {
      event.target.classList.remove("hold", "hide");
    }
    function dragOver(event: any) {
      event.preventDefault();
    }
    function dragEnter(event: any) {
      event.target.classList.add("hovered");
    }
    function dragLeave(event: any) {
      event.target.classList.remove("hovered");
    }
    function dragDrop(event: any) {
      event.target.classList.remove("hovered");
      // event.target.append(item);
    }

    const elementsPool: ISelectAnswer[] =
      this.questions.getValue() as ISelectAnswer[];

    return (
      <div>
        {elementsPool.map((item: ISelectAnswer, index: number) => (
          <div
            key={item.id}
            draggable
            className="ranging-question_item"
            id={index.toString()}
          >
            {item.title}
          </div>
        ))}
      </div>
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
        {this.outputAnswers()}
      </div>
    );
  }
}
