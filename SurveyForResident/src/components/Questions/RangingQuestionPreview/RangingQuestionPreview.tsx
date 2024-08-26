import React from "react";
import "../Question.scss";
import { Label } from "@fluentui/react";
import { IRangingQuestionPreviewProps } from "./IRangingQuestionPreviewProps";
import { ISelectAnswer } from "../../../../../SurveyCore/src/model/formElements/ISelectAnswer";
import { IRangingQuestionPreviewState } from "./IRangingQuestionPreviewState";

export class RangingQuestionPreview extends React.Component<IRangingQuestionPreviewProps, IRangingQuestionPreviewState> {
  constructor(props: IRangingQuestionPreviewProps) {
    super(props);
    this.state = {
      dragOver: false,
    }
  }

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

  private outputAnswers(): React.ReactNode {
    const listElements = document.querySelector(".ranging-question_list")

    if (listElements) {
      listElements.addEventListener(`dragstart`, (event: any) => {
        event.target.className = "ranging-question_item hovered";
      })
      listElements.addEventListener(`dragend`, (event: any) => {
        event.target.className = "ranging-question_item";
      })
      listElements.addEventListener(`dragover`, (event: any) => {
        event.preventDefault();
        const activeElement = listElements.querySelector('.hovered');
        const currentElement = event.target;
        const isMoveable = activeElement !== currentElement && currentElement.classList.contains(`ranging-question_item`)

        if (!isMoveable) {
          return;
        }

        if (activeElement) {
          const nextElement = (currentElement === activeElement?.nextElementSibling) ?
            currentElement.nextElementSibling :
            currentElement;
          listElements.insertBefore(activeElement, nextElement);
        }
      })

      const getNextElement = (cursorPosition: any, currentElement: any) => {
        const currentElementCoord = currentElement.getBoundingClientRect();
        const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
        const nextElement = (cursorPosition < currentElementCenter) ?
          currentElement :
          currentElement.nextElementSibling;
        return nextElement;
      };

      listElements.addEventListener(`dragover`, (event: any) => {
        event.preventDefault();

        const activeElement = listElements.querySelector('.hovered');
        const currentElement = event.target;
        const isMoveable = activeElement !== currentElement && currentElement.classList.contains("ranging-question_item");

        if (!isMoveable) {
          return;
        }

        const nextElement = getNextElement(event.clientY, currentElement);

        if (
          nextElement &&
          activeElement === nextElement.previousElementSibling ||
          activeElement === nextElement
        ) {
          return;
        }

        if (activeElement) {
          listElements.insertBefore(activeElement, nextElement);
        }

        let answer: string = ''

        listElements.childNodes.forEach((item, indexItem) => {
          if (indexItem === 0) {
            answer = answer + item.textContent;
          }
          if (indexItem > 0) {
            answer = answer + ", " + item.textContent;
          }
        });
        this.props.setAnswer(
          answer,
          this.props.survey.pages[this.props.pageId].panels[0].questions[
            this.props.id
          ].id
        );
      })
    }

    const elementsPool: ISelectAnswer[] =
      this.questions.getValue() as ISelectAnswer[];
    return (
      <div className=" ranging-question_list">
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
