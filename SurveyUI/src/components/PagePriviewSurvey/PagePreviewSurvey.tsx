import * as React from "react";
import { IPagePreviewSurveyProps } from "./IPagePreviewSurvey";
import { QuestionType } from "../../../../SurveyCore/src/model/QuestionType";
import { TextQuestionPreview } from "../Questions/TextQuestionPreview/TextQuestionPreview";

export class PagePreviewSurvey extends React.Component<IPagePreviewSurveyProps> {

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
      // case "Select":
      //   return (
      //     <CheckboxQuestion
      //       id={id}
      //       pageId={pageId}
      //       survey={this.props.survey}
      //       deleteQuestion={this.props.deleteQuestion}
      //       editCurrentItem={this.props.editCurrentItem}
      //     />
      //   );
      // case "Choice":
      //   return (
      //     <RadioButtonQuestion
      //       id={id}
      //       pageId={pageId}
      //       survey={this.props.survey}
      //       deleteQuestion={this.props.deleteQuestion}
      //       editCurrentItem={this.props.editCurrentItem}
      //     />
      //   );
      // case "Date":
      //   return (
      //     <DateQuestion
      //       id={id}
      //       pageId={pageId}
      //       survey={this.props.survey}
      //       deleteQuestion={this.props.deleteQuestion}
      //       editCurrentItem={this.props.editCurrentItem}
      //     />
      //   );
      // case "Number":
      //   return (
      //     <RatingScaleQuestion
      //       id={id}
      //       pageId={pageId}
      //       survey={this.props.survey}
      //       deleteQuestion={this.props.deleteQuestion}
      //       editCurrentItem={this.props.editCurrentItem}
      //     />
      //   );
      default:
        break;
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

                  </div>
                  {this.props.survey.pages[indexPage].panels[0].questions.map(
                    (elements, indexQuestion) => (
                      <div
                        className="question-item"
                        key={indexQuestion}
                        id={`${indexQuestion}`}
                      >
                        
                      </div>
                    )
                  )}
                </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}
