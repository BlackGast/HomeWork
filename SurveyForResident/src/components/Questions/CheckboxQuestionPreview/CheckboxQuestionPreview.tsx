import React from "react";
import { ICheckboxQuestionPreviewProps } from "./ICheckboxQuestionPreviewProps";
import { Checkbox, Label, Stack } from "@fluentui/react";
import { IChoice } from "../../../../../SurveyCore/src/model/formElements/IChoice";

export class CheckboxQuestionPreview extends React.Component<ICheckboxQuestionPreviewProps> {
  private questions =
    this.props.survey.pages[this.props.pageId].panels[0].questions[
    this.props.id
    ];

  private items: IChoice[] = this.questions.getValue() as IChoice[];

  private answerPool: string[] = [];

  // private fillAnswer(): void {
  //   this.props.answerModel.answer.map((item, index) => {
  //     if (item.id === this.props.idStr && item.answer !== "Нет ответа") {
  //       // console.log(this.items);

  //     }
  //   });
  // }

  private outputSelects(): React.ReactNode {
    const elementsPool: IChoice[] = this.questions.getValue() as IChoice[];
    let answer: number[] = [];
    let str: string[] = [];
    this.items.forEach((item, indexItem) => {
      this.props.easyModel.answer.forEach((element, indexElement) => {
        // console.log(item);
        str = element.answer.split(',');
        if (element.id === this.props.idStr && element.answer !== "Нет ответа") {
          if (item.title === element.answer) {
            answer.push(indexItem);
            // console.log(item);
            // console.log(indexItem);
          } 
          if (item.title === str[indexItem]) {
            console.log(item);
            // console.log(element.answer);
            // if (item) {

            // }
          }
        }
      })
    })
    // console.log(str);
    // console.log(answer);
    
    const setAnswer = (index: number): boolean => {
      let answer: boolean = false;
      str.forEach((Item, indexItem) => {
        this.props.easyModel.answer.forEach((element, indexElement) => {
          if (Item === element.answer) {
            // console.log(Item);
          }
          // if (Item === ) {

          // }
        })
      })
      return answer;
    }

    // console.log(elementsPool);

    const stackTokens = { childrenGap: 10 };
    return (
      <Stack tokens={stackTokens} style={{ paddingLeft: "10px" }}>
        {elementsPool.map((element: IChoice, index) => (
          <Checkbox
            key={element.id}
            label={element.title}
            defaultChecked={setAnswer(index)}
            onChange={() => {
              let redactor: boolean = false;
              this.props.answerModel.answer.map((item) => {
                if (
                  item.id === this.props.idStr &&
                  item.answer === "Нет ответа"
                ) {
                  this.props.setAnswer("", this.props.idStr);
                }
              });
              if (this.answerPool.length > 0) {
                this.answerPool.map((item, indexItem) => {
                  if (item === element.title) {
                    this.answerPool.splice(indexItem, 1);
                    redactor = true;
                  }
                });
              }
              if (this.answerPool.length === 0 && redactor === false) {
                this.answerPool.push(element.title);
              }
              if (
                this.answerPool.length !== 0 &&
                redactor === false &&
                element.title !== this.answerPool[0]
              ) {
                this.answerPool.push(element.title);
              }
              redactor = false;
              this.props.addChoices(element.title, this.props.idStr);
              this.props.setAnswer(
                this.answerPool.toString(),
                this.props.idStr
              );
              if (this.answerPool.length < 1) {
                this.props.setAnswer("Нет ответа", this.props.idStr);
              }
              // this.fillAnswer();
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
