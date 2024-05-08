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
    // const item = document.getElementById(".item");
    // const placeholders = document.querySelectorAll(".placeholder");

    // if (item) {
    //   item.addEventListener("dragstart", dragstart);
    //   item.addEventListener("dragend", dragend);
    // }

    // for (const placeholder of placeholders) {
    //   placeholder.addEventListener("dragover", dragover);
    //   placeholder.addEventListener("dragenter", dragenter);
    //   placeholder.addEventListener("dragleave", dragleave);
    //   placeholder.addEventListener("drop", dragdrop);
    // }

    // function dragstart(event: any) {
    //   event.target.classList.add("hold");
    //   setTimeout(() => {
    //     event.target.classList.add("hide"), 0;
    //   });
    // }

    // function dragend(event: any) {
    //   event.target.classList.remove("hold", "hide");
    // }
    // function dragover(event: any) {
    //   event.preventDefault();
    // }
    // function dragenter(event: any) {
    //   event.target.classList.add("hovered");
    // }
    // function dragleave(event: any) {
    //   event.target.classList.remove("hovered");
    // }
    // function dragdrop(event: any) {
    //   event.target.classList.remove("hovered");
    //   event.target.append(item);
    // }

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
