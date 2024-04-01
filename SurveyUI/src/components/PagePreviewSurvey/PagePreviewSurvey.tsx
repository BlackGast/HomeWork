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
    return (
      <div className="preview-container_page">
        <div className="preview-container_page_block">
          <div className="preview-container_page_header">
            <label id="pageTitle">
              {pageId + 1} {this.props.survey.pages[pageId].title}
            </label>
            <label id="pageDescription">
              {this.props.survey.pages[pageId].description}
            </label>
          </div>
        </div>
        {this.props.survey.pages[pageId].panels[0].questions.map(
          (elements, indexQuestion) => (
            <div
              className="question-item"
              key={elements.id}
              id={`${indexQuestion}`}
            >
              {this.renderQuestion(
                this.props.survey.pages[pageId].panels[0].questions[
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
    if (this.props.survey.pages.length > 1) {
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
        this.props.survey.pages.length === 2
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

      if (this.state.currentPage === this.props.survey.pages.length - 1) {
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

      if (this.state.currentPage !== this.props.survey.pages.length - 1) {
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
    if (this.props.survey.pages.length === 0) {
      return (
        <div className="preview-container">
          <div className="preview-container_title-survey">
            <p>Опрос пустой</p>
          </div>
        </div>
      );
    }
    if (this.props.survey.pages.length !== 0) {
      return (
        <div>
          <div className="preview-container">
            <div className="preview-container_title-survey">
              <div className="preview-container_title-survey_block">
                <label id="surveyTitle">{this.props.survey.title}</label>
                <label id="surveyDescription">
                  {this.props.survey.description}
                </label>
              </div>
              <hr />
              {this.renderPage(this.state.currentPage)}
            </div>
          </div>
        </div>
      );
    }
  }
}
