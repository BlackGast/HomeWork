import * as React from "react";
import "../Question.scss";
import { Label, MaskedTextField, TextField } from "@fluentui/react";
import { ITextQuestionPreviewProps } from "./ITextQuestionPreview";
import { ITextQuestionPreviewState } from "./ITextQuestionPreviewState";

export class TextQuestionPreview extends React.Component<ITextQuestionPreviewProps, ITextQuestionPreviewState> {
  constructor(props: ITextQuestionPreviewProps) {
    super(props);
    this.state = {
      phoneNumber: '',
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
        <Label id="questionName" className="question-label_title_name" required>
          {this.questions.title}
        </Label>
      );
    }
  }

  private fillAnswer(): string {
    let answer: string = '';

    this.props.answerModel.answer.map((item) => {
      if (item.id === this.props.idStr) {
        //дописать реализацию заполнения ответов для уже отвеченного варианта
        if (item.answer !== "Нет ответа") {
          answer = item.answer;
        }
      }
    })
    return answer;
  }

  public render(): React.ReactNode {
    if (this.questions.getPropertyByName("subType") === "Text") {
      return (
        <div className="container_page_question">
          <div className="question-label">
            <div className="question-label_title">
              {this.props.id + 1}
              {"."}
              {this.requiredSymbol()}
            </div>
          </div>
          <div className="question-textfield">
            <TextField
              id={`answer-${this.props.pageId}-${this.props.id}`}
              defaultValue={this.fillAnswer()}
              onChange={(e) => {
                this.props.setAnswer(
                  e.currentTarget.value,
                  this.props.survey.pages[this.props.pageId].panels[0]
                    .questions[this.props.id].id
                );
                const element = document.getElementById(
                  `answer-${this.props.pageId}-${this.props.id}`
                );
                if (element) {
                  element.style.border = "none";
                }
              }}
              onBlur={(e) => {
                if (
                  e.currentTarget.value === "" &&
                  this.questions.required === true
                ) {
                  const element = document.getElementById(
                    `answer-${this.props.pageId}-${this.props.id}`
                  );
                  if (element) {
                    element.style.border = "1px solid red";
                  }
                }
              }}
            />
          </div>
        </div>
      );
    }

    if (this.questions.getPropertyByName("subType") === "Number") {
      return (
        <div className="container_page_question">
          <div className="question-label">
            <div className="question-label_title">
              {this.props.id + 1}
              {"."}
              {this.requiredSymbol()}
            </div>
          </div>
          <div className="question-textfield">
            <TextField
              id={`answer-${this.props.pageId}-${this.props.id}`}
              defaultValue={this.fillAnswer()}
              type="number"
              onChange={(e) => {
                this.props.setAnswer(
                  e.currentTarget.value,
                  this.props.survey.pages[this.props.pageId].panels[0]
                    .questions[this.props.id].id
                );
                const element = document.getElementById(
                  `answer-${this.props.pageId}-${this.props.id}`
                );
                if (element) {
                  element.style.border = "none";
                }
              }}
              onBlur={(e) => {
                if (
                  e.currentTarget.value === "" &&
                  this.questions.required === true
                ) {
                  const element = document.getElementById(
                    `answer-${this.props.pageId}-${this.props.id}`
                  );
                  if (element) {
                    element.style.border = "1px solid red";
                  }
                }
              }}
            />
          </div>
        </div>
      );
    }
    if (this.questions.getPropertyByName("subType") === "PhoneNumber") {
      return (
        <div className="container_page_question">
          <div className="question-label">
            <div className="question-label_title">
              {this.props.id + 1}
              {"."}
              {this.requiredSymbol()}
            </div>
          </div>
          <div className="question-textfield">
            <MaskedTextField
              id={`answer-${this.props.pageId}-${this.props.id}`}
              value={this.state.phoneNumber}
              mask="9(999)999-9999"
              onChange={(e, newValue?: string) => {
                this.setState({
                  phoneNumber: newValue ?? ''
                })
                this.props.setAnswer(
                  e.currentTarget.value,
                  this.props.survey.pages[this.props.pageId].panels[0]
                    .questions[this.props.id].id
                );
                const element = document.getElementById(
                  `answer-${this.props.pageId}-${this.props.id}`
                );
                if (element) {
                  element.style.border = "none";
                }
              }}
              onBlur={(e) => {
                if (
                  e.currentTarget.value === "" &&
                  this.questions.required === true
                ) {
                  const element = document.getElementById(
                    `answer-${this.props.pageId}-${this.props.id}`
                  );
                  if (element) {
                    element.style.border = "1px solid red";
                  }
                }
              }}
            />
          </div>
        </div>
      );
    }

    if (this.questions.getPropertyByName("subType") === "Email") {
      return (
        <div className="container_page_question">
          <div className="question-label">
            <div className="question-label_title">
              {this.props.id + 1}
              {"."}
              {this.requiredSymbol()}
            </div>
          </div>
          <div className="question-textfield">
            <TextField
              id={`answer-${this.props.pageId}-${this.props.id}`}
              defaultValue={this.fillAnswer()}
              type="email"
              onChange={(e) => {
                this.props.setAnswer(
                  e.currentTarget.value,
                  this.props.survey.pages[this.props.pageId].panels[0]
                    .questions[this.props.id].id
                );
                const element = document.getElementById(
                  `answer-${this.props.pageId}-${this.props.id}`
                );
                if (element) {
                  element.style.border = "none";
                }
              }}
              onBlur={(e) => {
                const element = document.getElementById(
                  `answer-${this.props.pageId}-${this.props.id}`
                );
                if (
                  e.currentTarget.value === "" &&
                  this.questions.required === true
                ) {
                  if (element) {
                    element.style.border = "1px solid red";
                  }
                }
                const validateEmail = (email: string) => {
                  const expression =
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                  return expression.test(String(email).toLowerCase());
                };
                if (validateEmail(e.currentTarget.value) === false) {
                  if (element) {
                    element.style.border = "1px solid red";
                  }
                } else if (element) {
                  element.style.border = "none";
                }
              }}
            />
          </div>
        </div>
      );
    }
  }
}
