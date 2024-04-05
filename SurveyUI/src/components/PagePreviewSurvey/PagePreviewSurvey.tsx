import * as React from "react";
import "./PagePreviewSurvey.scss";
import { IPagePreviewSurveyProps } from "./IPagePreviewSurveyProps";
import { QuestionType } from "../../../../SurveyCore/src/model/QuestionType";
import { TextQuestionPreview } from "../Questions/TextQuestionPreview/TextQuestionPreview";
import { IPagePreviewSurveyState } from "./IPagePreviewSurveyState";
import { CheckboxQuestionPreview } from "../Questions/CheckboxQuestionPreview/CheckboxQuestionPreview";
import { DefaultButton } from "@fluentui/react";
import { back, forward } from "../IProps/IIconProps";
import { RadioButtonQuestionPreview } from "../Questions/RadioButtonQuestionPreview/RadioButtonQuestionPreview";
import { RatingScaleQuestionPreview } from "../Questions/RatingScaleQuestionPreview/RatingScaleQuestionPreview";
import { DateQuestionPreview } from "../Questions/DateQuestionPreview/DateQuestionPreview";
import Answer from "./AnswerModel/AnswerModel";
import { IAnswerModel } from "./AnswerModel/model/IAnswerModel";

export class PagePreviewSurvey extends React.Component<
  IPagePreviewSurveyProps,
  IPagePreviewSurveyState
> {
  constructor(props: IPagePreviewSurveyProps) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  private newModel: Answer = new Answer();
  private answerModel: IAnswerModel = {
    title: "",
    pages: [],
  };

  private renderAnswerTable(): React.ReactNode {
    this.newModel.createModel(this.props.survey);
    this.answerModel = this.newModel.getModel();
    console.log(this.answerModel);
    return (
      <div>
        Table
        <></>
      </div>
    );
  }

  private renderQuestion(
    item: QuestionType,
    id: number,
    pageId: number
  ): React.ReactNode {
    switch (item) {
      case "Text":
        return (
          <TextQuestionPreview
            id={id}
            pageId={pageId}
            survey={this.props.survey}
          />
        );
      case "Select":
        return (
          <CheckboxQuestionPreview
            id={id}
            pageId={pageId}
            survey={this.props.survey}
          />
        );
      case "Choice":
        return (
          <RadioButtonQuestionPreview
            id={id}
            pageId={pageId}
            survey={this.props.survey}
          />
        );
      case "Date":
        return (
          <DateQuestionPreview
            id={id}
            pageId={pageId}
            survey={this.props.survey}
          />
        );
      case "Number":
        return (
          <RatingScaleQuestionPreview
            id={id}
            pageId={pageId}
            survey={this.props.survey}
          />
        );
      default:
        break;
    }
  }

  private renderPage(pageId: number): React.ReactNode {
    const page = this.props.survey.pages[pageId];
    const panel = this.props.survey.pages[pageId].panels[0];
    return (
      <div className="preview-container_page">
        <div className="preview-container_page_block">
          <div className="preview-container_page_header">
            <label id="pageTitle">
              {pageId + 1} {page.title}
            </label>
            <label id="pageDescription">
              {page.description}
            </label>
          </div>
        </div>
        {panel.questions.map(
          (elements, indexQuestion) => (
            <div
              className="question-item"
              key={elements.id}
              id={`${indexQuestion}`}
            >
              {this.renderQuestion(
                panel.questions[
                  indexQuestion
                ].type,
                indexQuestion,
                pageId
              )}
            </div>
          )
        )}
        {this.renderNavButton()}
      </div>
    );
  }

  private renderNavButton(): React.ReactNode {
    const page = this.props.survey.pages
    if (page.length > 1) {
      if (this.state.currentPage === 0) {
        return (
          <DefaultButton
            iconProps={forward}
            onClick={() => {
              this.setState((prevState) => ({
                currentPage: prevState.currentPage + 1,
              }));
            }}
          />
        );
      }

      if (
        this.state.currentPage !== 0 &&
        page.length === 2
      ) {
        return (
          <DefaultButton
            iconProps={back}
            onClick={() => {
              this.setState((prevState) => ({
                currentPage: prevState.currentPage - 1,
              }));
            }}
          />
        );
      }

      if (this.state.currentPage === page.length - 1) {
        return (
          <DefaultButton
            iconProps={back}
            onClick={() => {
              this.setState((prevState) => ({
                currentPage: prevState.currentPage - 1,
              }));
            }}
          />
        );
      }

      if (this.state.currentPage !== page.length - 1) {
        return (
          <>
            <DefaultButton
              iconProps={back}
              onClick={() => {
                this.setState((prevState) => ({
                  currentPage: prevState.currentPage - 1,
                }));
              }}
            />
            <DefaultButton
              iconProps={forward}
              onClick={() => {
                this.setState((prevState) => ({
                  currentPage: prevState.currentPage + 1,
                }));
              }}
            />
          </>
        );
      }
    }
  }

  public render(): React.ReactNode {
    const survey = this.props.survey;
    const page = this.props.survey.pages;
    if (page.length === 0) {
      return (
        <div className="preview-container">
          <div className="preview-container_title-survey">
            <p>Опрос пустой</p>
          </div>
        </div>
      );
    }
    if (page.length !== 0) {
      return (
        <div>
          <div className="preview-container">
            <div className="preview-container_title-survey">
              <div className="preview-container_title-survey_block">
                <label id="surveyTitle">{survey.title}</label>
                <label id="surveyDescription">
                  {survey.description}
                </label>
              </div>
              <hr />
              {/* {this.renderAnswerTable()} */}
              {this.renderPage(this.state.currentPage)}
            </div>
          </div>
        </div>
      );
    }
  }
}
