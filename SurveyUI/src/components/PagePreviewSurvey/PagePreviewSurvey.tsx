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
      answerModel: {
        title: "",
        pages: [],
      },
      answer: "",
      requiredLength: 0,
      requiredPull: 0,
    };
  }

  private newModel: Answer = new Answer();
  private answerModel: IAnswerModel = {
    title: "",
    pages: [],
  };
  private requiredLength: number = 0;
  private requiredPull: string[] = [];

  componentDidMount(): void {
    this.createAnswerModel();
    this.setState({
      answerModel: this.answerModel,
    });
  }
  // componentDidUpdate(): void {
  //   console.log("update");

  // }

  private createAnswerModel(): void {
    this.newModel.createModel(this.props.survey);
    this.answerModel = this.newModel.getModel();
  }

  private fillRequiredLength(pageId: number, questionId?: number): number {
    let lengthElement = 0;
    this.props.survey.pages[pageId].panels[0].questions.map(
      (element, index) => {
        if (element.required === true) {
          lengthElement++;
        }
      }
    );
    return lengthElement;
  }

  // private fillRequiredPull(item?: number): void {
  //   this.requiredPull++;
  //   // this.setState(prevState => ({requiredPull: prevState.requiredPull + 1}))
  //   // this.state.requiredPull = this.state.requiredPull + 1;
  //   console.log(this.requiredPull);
  // }

  private checkPullAndLength(): boolean {
    if (this.requiredLength === this.state.requiredPull) {
      return false;
    }
    return true;
  }

  private checkRequired(): void {
    this.answerModel.pages.map((page, indexPage) => {
      this.answerModel.pages[indexPage].panels[0].questions.map(
        (element, questionId) => {
          if (element.required === true) {
            this.requiredPull.push(`answer-${indexPage}-${questionId}`)
          }
        }
      );
    });
    console.log(this.requiredPull);
    
  }

  private renderTable(): React.ReactNode {
    return (
      <div className="answer-table">
        <table style={{ width: "70%" }}>
          <thead>
            <tr
              className="answer-table_element"
              style={{ background: "white" }}
            >
              <th className="answer-table_element_item">Название</th>
              <th className="answer-table_element_item">Ответ</th>
            </tr>
          </thead>
          <tbody>
            {this.answerModel.pages.map(({}, indexPage) => (
              <tr key={indexPage}>
                {this.answerModel.pages[indexPage].panels[0].questions.map(
                  (item, indexQuestion) => (
                    <tr key={indexQuestion} className="answer-table_element">
                      <td className="answer-table_element_item">
                        {item.title}
                      </td>
                      <td className="answer-table_element_item">
                        {item.answer}
                      </td>
                    </tr>
                  )
                )}
              </tr>
            ))}
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
            // fillRequiredPull={this.fillRequiredPull}
            // requiredPull={this.state.requiredPull}
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
            addChoices={this.addChoices}
            // fillRequiredPull={this.fillRequiredPull}
            // requiredPull={this.state.requiredPull}
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
            // fillRequiredPull={this.fillRequiredPull}
            // requiredPull={this.state.requiredPull}
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
            // fillRequiredPull={this.fillRequiredPull}
            // requiredPull={this.state.requiredPull}
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
            // fillRequiredPull={this.fillRequiredPull}
            // requiredPull={this.state.requiredPull}
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
      //this.requiredPull = 0;
      //this.requiredLength = this.fillRequiredLength(pageId);
      //console.log(this.requiredLength);
      
      const page = this.props.survey.pages[pageId];
      const panel = this.props.survey.pages[pageId].panels[0];

      return (
        <div className="preview-container_page">
          <div className="preview-container_page_block">
            <div className="preview-container_page_header">
              <label
                id="pageTitle"
                className="preview-container_page_header_title"
              >
                {pageId + 1} {page.title}
              </label>
              <label
                id="pageDescription"
                className="preview-container_page_header_description"
              >
                {page.description}
              </label>
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

  private renderNavButton(disabl?: boolean): React.ReactNode {
    const page = this.props.survey.pages;
    if (this.state.currentPage === 0) {
      return (
        <DefaultButton
          iconProps={forward}
          style={{ marginBottom: "10px" }}
          onClick={() => {
            this.setState((prevState) => ({
              currentPage: prevState.currentPage + 1,
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
          style={{ marginBottom: "10px" }}
          onClick={() => {
            this.setState((prevState) => ({
              currentPage: prevState.currentPage - 1,
            }));
            this.saveAnswerModel();
          }}
        />
      );
    }

    return (
      <>
        <DefaultButton
          iconProps={back}
          style={{ marginBottom: "10px", marginRight: "5px" }}
          onClick={() => {
            this.setState((prevState) => ({
              currentPage: prevState.currentPage - 1,
            }));
            this.saveAnswerModel();
          }}
        />
        <DefaultButton
          iconProps={forward}
          style={{ marginBottom: "10px", marginLeft: "5px" }}
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

  private setAnswer(
    pageId?: number,
    QuestionId?: number,
    answer?: string
  ): void {
    this.answerModel.pages[pageId ?? 0].panels[0].questions[
      QuestionId ?? 0
    ].answer = answer ?? "";
  }

  private addChoices(
    pageId?: number,
    QuestionId?: number,
    answer?: string
  ): void {
    this.answerModel.pages[pageId ?? 0].panels[0].questions[
      QuestionId ?? 0
    ].answer += ` ${answer}`;
  }

  private saveAnswerModel(): void {
    this.setState({
      answerModel: this.answerModel,
    });
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
                <label
                  className="preview-container_title-survey_block_title"
                  id="surveyTitle"
                >
                  {survey.title}
                </label>
                <label
                  id="surveyDescription"
                  className="preview-container_title-survey_block_description"
                >
                  {survey.description}
                </label>
              </div>
              <hr />
              {this.renderPage(this.state.currentPage)}
              {/* {this.checkRequired()} */}
            </div>
          </div>
        </div>
      );
    }
  }
}
