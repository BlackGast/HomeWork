import * as React from "react";
import "./PagePreviewSurvey.scss";
import { IPagePreviewSurveyProps } from "./IPagePreviewSurveyProps";
import { QuestionType } from "../../../../SurveyCore/src/model/QuestionType";
import { TextQuestionPreview } from "../Questions/TextQuestionPreview/TextQuestionPreview";
import { IPagePreviewSurveyState } from "./IPagePreviewSurveyState";
import { CheckboxQuestionPreview } from "../Questions/CheckboxQuestionPreview/CheckboxQuestionPreview";
import { DefaultButton, ThemeContext } from "@fluentui/react";
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
      answerModel: {
        title: "",
        pages: [],
      },
      answer: "",
    };
  }

  private newModel: Answer = new Answer();
  private answerModel: IAnswerModel = {
    title: "",
    pages: [],
  };

  componentDidMount(): void {
    this.createAnswerModel();
    this.setState({
      answerModel: this.answerModel,
    });
  }
  // componentDidUpdate(): void {
  //   console.log(this.state.answerModel.pages);

  // }

  private createAnswerModel(): void {
    this.newModel.createModel(this.props.survey);
    this.answerModel = this.newModel.getModel();
    console.log(this.answerModel);
  }

  private renderAnswerTable(): React.ReactNode {
    return (
      <>
        {/* {this.state.answerModel.pages.map((element, indexPage) => { */}
          {
            this.state.answerModel.pages[0].panels[0].questions.map(
              (item, indexItem) => {
                <tr>
                <td>{item.answer}</td>
                <td>{item.title}</td>
              </tr>;
            }
          )
        }
      {/* })} */}
      </>
    );
  }

  private renderTable(): React.ReactNode {
    return (
      <div>
        Ответы
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Ответ</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>{this.renderAnswerTable()}</tr> */}
            <tr>
              <td>1</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
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
            setAnswer={this.setAnswer}
            answerModel={this.state.answerModel}
          />
        );
      case "Select":
        return (
          <CheckboxQuestionPreview
            id={id}
            pageId={pageId}
            survey={this.props.survey}
            setAnswer={this.setAnswer}
            answerModel={this.state.answerModel}
          />
        );
      case "Choice":
        return (
          <RadioButtonQuestionPreview
            id={id}
            pageId={pageId}
            survey={this.props.survey}
            setAnswer={this.setAnswer}
            answerModel={this.state.answerModel}
          />
        );
      case "Date":
        return (
          <DateQuestionPreview
            id={id}
            pageId={pageId}
            survey={this.props.survey}
            setAnswer={this.setAnswer}
            answerModel={this.state.answerModel}
          />
        );
      case "Number":
        return (
          <RatingScaleQuestionPreview
            id={id}
            pageId={pageId}
            survey={this.props.survey}
            setAnswer={this.setAnswer}
            answerModel={this.state.answerModel}
          />
        );
      default:
        break;
    }
  }

  private renderPage(pageId: number): React.ReactNode {
    if (this.props.survey.pages.length === this.state.currentPage) {
      return (
        <div className="preview-container_page">
          {this.renderTable()}
          {this.renderNavButton()}
        </div>
      );
    }
    if (this.props.survey.pages.length !== this.state.currentPage) {
      const page = this.props.survey.pages[pageId];
      const panel = this.props.survey.pages[pageId].panels[0];
      return (
        <div className="preview-container_page">
          <div className="preview-container_page_block">
            <div className="preview-container_page_header">
              <label id="pageTitle">
                {pageId + 1} {page.title}
              </label>
              <label id="pageDescription">{page.description}</label>
            </div>
          </div>
          {panel.questions.map((elements, indexQuestion) => (
            <div
              className="question-item"
              key={elements.id}
              id={`${indexQuestion}`}
            >
              {this.renderQuestion(
                panel.questions[indexQuestion].type,
                indexQuestion,
                pageId
              )}
            </div>
          ))}
          {this.renderNavButton()}
        </div>
      );
    }
  }

  private renderNavButton(): React.ReactNode {
    const page = this.props.survey.pages;
    // if (page.length > 1) {
    if (this.state.currentPage === 0) {
      return (
        <DefaultButton
          iconProps={forward}
          onClick={() => {
            this.setState((prevState) => ({
              currentPage: prevState.currentPage + 1,
            }));
            this.saveAnswerModel();
          }}
        />
      );
    }

    if (this.state.currentPage !== 0 && page.length === 2) {
      return (
        <DefaultButton
          iconProps={back}
          onClick={() => {
            this.setState((prevState) => ({
              currentPage: prevState.currentPage - 1,
            }));
            this.saveAnswerModel();
          }}
        />
      );
    }

    if (this.state.currentPage === page.length) {
      return (
        <DefaultButton
          iconProps={back}
          onClick={() => {
            this.setState((prevState) => ({
              currentPage: prevState.currentPage - 1,
            }));
            this.saveAnswerModel();
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
              this.saveAnswerModel();
            }}
          />
          <DefaultButton
            iconProps={forward}
            onClick={() => {
              this.setState((prevState) => ({
                currentPage: prevState.currentPage + 1,
              }));
              this.saveAnswerModel();
            }}
          />
        </>
      );
    }
    // }
  }

  private setAnswer(
    pageId?: number,
    QuestionId?: number,
    answer?: string
  ): void {
    // this.state.answerModel.pages[pageId ?? 0].panels[0].questions[QuestionId ?? 0].answer = answer ?? ""
    this.answerModel.pages[pageId ?? 0].panels[0].questions[
      QuestionId ?? 0
    ].answer = answer ?? "";
    //this.saveAnswerModel()
  }

  private saveAnswerModel(): void {
    this.setState({
      answerModel: this.answerModel,
    });
  }

  public render(): React.ReactNode {
    //this.createAnswerModel();
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
                <label id="surveyDescription">{survey.description}</label>
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
