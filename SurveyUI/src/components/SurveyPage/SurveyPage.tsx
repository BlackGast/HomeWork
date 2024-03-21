import * as React from "react";
import "./SurveyPage.scss";
import { DefaultButton, IconButton } from "@fluentui/react";
import { QuestionType } from "../../../../SurveyCore/src/model/QuestionType";
import { TextQuestion } from "../Questions/TextQuestion/TextQuestion";
import { CheckboxQuestion } from "../Questions/CheckboxQuestion/CheckboxQuestion";
import { RadioButtonQuestion } from "../Questions/RadioButtonQuestion/RadioButtonQuestion";
import { DateQuestion } from "../Questions/DateQuestion/DateQuestion";
import { RatingScaleQuestion } from "../Questions/RaitingScaleQuestion/RatingScaleQuestion";
import { ButtonAddQuestion } from "../BottonAddQuestion/ButtonAddQuestion";
import { ISurveyPageState } from "./ISurveyPageState";
import { ISurveyPageProps } from "./ISurveyPageProps";
import { editPen, trashCan } from "../IProps/IIconProps";

export class SurveyPage extends React.Component<
  ISurveyPageProps,
  ISurveyPageState
> {
  private renderQuestion(
    item: QuestionType,
    id: number,
    pageId: number
  ): React.ReactNode {
    switch (item) {
      case "Text":
        return (
          <TextQuestion
            id={id}
            pageId={pageId}
            survey={this.props.survey}
            deleteQuestion={this.props.deleteQuestion}
            editCurrentItem={this.props.editCurrentItem}
          />
        );
      case "Select":
        return (
          <CheckboxQuestion
            id={id}
            pageId={pageId}
            survey={this.props.survey}
            deleteQuestion={this.props.deleteQuestion}
            editCurrentItem={this.props.editCurrentItem}
          />
        );
      case "Choice":
        return (
          <RadioButtonQuestion
            id={id}
            pageId={pageId}
            survey={this.props.survey}
            deleteQuestion={this.props.deleteQuestion}
            editCurrentItem={this.props.editCurrentItem}
          />
        );
      case "Date":
        return (
          <DateQuestion
            id={id}
            pageId={pageId}
            survey={this.props.survey}
            deleteQuestion={this.props.deleteQuestion}
            editCurrentItem={this.props.editCurrentItem}
          />
        );
      case "Number":
        return (
          <RatingScaleQuestion
            id={id}
            pageId={pageId}
            survey={this.props.survey}
            deleteQuestion={this.props.deleteQuestion}
            editCurrentItem={this.props.editCurrentItem}
          />
        );
      default:
        break;
    }
  }

  public render(): React.ReactNode {
    if (this.props.survey.pages.length === 0) {
      return (
        <div>
          <div className="container">
            <div className="container_title-survey">
              <p>Опрос пустой. Нажмите на кнопку "Добавить вопрос."</p>
              <ButtonAddQuestion addQuestion={this.props.addQuestion} />
            </div>
          </div>
        </div>
      );
    }
    if (this.props.survey.pages.length !== 0) {
      return (
        <div className="container">
          <div className="container_title-survey">
            <div className="container_title-survey_block">
              <div className="container_title-survey_header">
                <label id="surveyTitle">{this.props.survey.title}</label>
                <label id="surveyDescription">
                  {this.props.survey.description}
                </label>
              </div>
              <IconButton
                iconProps={editPen}
                onClick={() => {
                  this.props.editCurrentItem("survey", undefined, undefined);
                }}
              />
            </div>
            <hr />
            {this.props.survey.pages.map((elements, indexPage) => (
              <div key={indexPage} id={`${indexPage}`}>
                <div className="container_page">
                  <div className="container_page_block">
                    <div className="container_page_header">
                      <label id="pageTitle">
                        {indexPage + 1}{" "}
                        {this.props.survey.pages[indexPage].title}
                      </label>
                      <label id="pageDescription">
                        {this.props.survey.pages[indexPage].description}
                      </label>
                    </div>
                    <IconButton
                      iconProps={editPen}
                      onClick={() => {
                        this.props.editCurrentItem(
                          "page",
                          indexPage,
                          undefined
                        );
                      }}
                    />
                  </div>
                  {this.props.survey.pages[indexPage].panels[0].questions.map(
                    (elements, indexQuestion) => (
                      <div
                        className="question-item"
                        key={indexQuestion}
                        id={`${indexQuestion}`}
                      >
                        {this.renderQuestion(
                          elements.type,
                          indexQuestion,
                          indexPage
                        )}
                      </div>
                    )
                  )}
                  <div className="container_page_under-button">
                    <ButtonAddQuestion
                      addQuestion={this.props.addQuestion}
                      pageIndex={indexPage}
                    />
                    <DefaultButton
                      text="Удалить страницу"
                      onClick={() => {
                        console.log(indexPage);
                        const index: number = indexPage;
                        this.props.deletePage(index);
                      }}
                      iconProps={trashCan}
                    />
                  </div>
                </div>
              </div>
            ))}
            <DefaultButton
              text="Добавить страницу"
              onClick={() => {
                this.props.addPage();
              }}
            />
          </div>
        </div>
      );
    }
  }
}
