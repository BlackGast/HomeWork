import React from "react";
import { ICheckboxQuestionPreviewProps } from "./ICheckboxQuestionPreviewProps";
import { Checkbox, Label, Stack } from "@fluentui/react";
import { IChoice } from "../../../../../SurveyCore/src/model/formElements/IChoice";

export class CheckboxQuestionPreview extends React.Component<ICheckboxQuestionPreviewProps> {
  private questions =
    this.props.survey.pages[this.props.pageId].panels[0].questions[
      this.props.id
    ];
  private answerPull: string[] = []
  private outputSelects(): React.ReactNode {
    const elementsPull: IChoice[] = this.questions.getValue() as IChoice[];
    const stackTokens = { childrenGap: 10 };
    return (
      <Stack tokens={stackTokens} style={{ paddingLeft: "10px" }}>
        {elementsPull.map((element: IChoice, indexElement) => (
          <Checkbox
            key={element.id}
            label={element.title}
            onChange={() => {
              this.props.answerModel.answer.map((item) => {
                if (
                  item.id === this.props.idStr &&
                  item.answer === "Нет ответа"
                ) {
                  this.props.setAnswer("", this.props.idStr);
                }
              });
              // this.answerPull.push(element.title);
              if (this.answerPull.length > 0) {
                this.answerPull.map((item, indexItem) => {
                  if (item === element.title) {
                    console.log(item, element.title, indexElement, indexItem);
                    this.answerPull.pop();
                    this.answerPull.splice(indexElement, 1);
                  }
                });
              }
              // if (this.answerPull.length !== 0) {
              //   this.answerPull.map((item, index) => {
              //     console.log(item, element.title, indexElement);
              //     if (item === element.title) {
              //       this.answerPull.splice(indexElement, 1);
              //     }

              //   });

              //   // this.answerPull.push(element.title);
              //   // this.props.setAnswer(
              //   //   this.answerPull.toString(),
              //   //   this.props.idStr
              //   // );
              //   console.log(this.answerPull, " внутри");
              //   // console.log(this.answerPull.toString());
              //   return;
              // }
              if (this.answerPull.length === 0) {
                this.answerPull.push(element.title);
              }
              
              console.log(this.answerPull);
              this.props.addChoices(element.title, this.props.idStr);
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
