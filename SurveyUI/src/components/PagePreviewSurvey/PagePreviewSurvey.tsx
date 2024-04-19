import * as React from "react";
import "./PagePreviewSurvey.scss";
import { IPagePreviewSurveyProps } from "./IPagePreviewSurveyProps";
import { QuestionType } from "../../../../SurveyCore/src/model/QuestionType";
import { TextQuestionPreview } from "../Questions/TextQuestionPreview/TextQuestionPreview";
import { IPagePreviewSurveyState } from "./IPagePreviewSurveyState";
import { CheckboxQuestionPreview } from "../Questions/CheckboxQuestionPreview/CheckboxQuestionPreview";
import {
  DefaultButton,
  FontWeights,
  Modal,
  getId,
  getTheme,
  mergeStyleSets,
} from "@fluentui/react";
import { back, forward } from "../IProps/IIconProps";
import { RadioButtonQuestionPreview } from "../Questions/RadioButtonQuestionPreview/RadioButtonQuestionPreview";
import { RatingScaleQuestionPreview } from "../Questions/RatingScaleQuestionPreview/RatingScaleQuestionPreview";
import { DateQuestionPreview } from "../Questions/DateQuestionPreview/DateQuestionPreview";
import Answer from "./AnswerModel/AnswerModel";
import { IAnswerModel } from "./AnswerModel/model/IAnswerModel";
import { IQuestion } from "./AnswerModel/model/IQuestion";

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
      showModal: false,
      errorState: false,
    };
  }

  private newModel: Answer = new Answer();
  private answerModel: IAnswerModel = {
    title: "",
    pages: [],
  };
  private requiredPull: IQuestion[] = [];
  private errorPull: boolean = false;

  componentDidMount(): void {
    this.createAnswerModel();
    this.setState({
      answerModel: this.answerModel,
    });
  }

  private createAnswerModel(): void {
    this.newModel.createModel(this.props.survey);
    this.answerModel = this.newModel.getModel();
  }

  private checkRequired(): void {
    this.errorPull = false;
    this.answerModel.pages[this.state.currentPage].panels[0].questions.map(
      (element) => {
        if (element.required === true) {
          this.requiredPull.push(element);
        }
      }
    );
    this.requiredPull.map((element) => {
      if (element.required === true && element.answer === "Нет ответа") {
        this.errorPull = true;
        this._showModal();
      }
    });
  }

  private theme = getTheme();
  private styles = mergeStyleSets({
    container: {
      display: "flex",
      flexFlow: "column nowrap",
      alignItems: "stretch",
    },
    header: [
      this.theme.fonts.xLarge,
      {
        flex: "1 1 auto",
        borderTop: `4px solid ${this.theme.palette.themePrimary}`,
        color: this.theme.palette.neutralPrimary,
        display: "flex",
        alignItems: "center",
        fontWeight: FontWeights.semibold,
        padding: "12px 12px 14px 24px",
      },
    ],
    heading: {
      color: this.theme.palette.neutralPrimary,
      fontWeight: FontWeights.semibold,
      fontSize: "inherit",
      margin: "0",
    },
    body: {
      flex: "4 4 auto",
      padding: "0 24px 24px 24px",
      overflowY: "hidden",
      selectors: {
        p: { margin: "14px 0" },
        "p:first-child": { marginTop: 0 },
        "p:last-child": { marginBottom: 0 },
      },
    },
  });

  private _titleId: string = getId("title");
  private _subtitleId: string = getId("subText");

  private _showModal = (): void => {
    this.setState({ showModal: true });
  };

  private _closeModal = (): void => {
    this.setState({ showModal: false });
  };

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
            {this.answerModel.pages.map((element, indexPage) => (
              <React.Fragment key={element.id}>
                {this.answerModel.pages[indexPage].panels[0].questions.map(
                  (item) => (
                    <tr key={item.id} className="answer-table_element">
                      <td className="answer-table_element_item">
                        {item.title}
                      </td>
                      <td className="answer-table_element_item">
                        {item.answer}
                      </td>
                    </tr>
                  )
                )}
              </React.Fragment>
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

  private renderNavButton(): React.ReactNode {
    const page = this.props.survey.pages;
    if (this.state.currentPage === 0) {
      return (
        <DefaultButton
          iconProps={forward}
          style={{ marginBottom: "10px" }}
          onClick={() => {
            this.checkRequired();
            if (this.errorPull === true) {
              console.log(this.errorPull);
              return;
            }
            if (this.errorPull === false) {
              this.setState((prevState) => ({
                currentPage: prevState.currentPage + 1,
              }));
              this.saveAnswerModel();
            }
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
            this.checkRequired();
            if (this.errorPull === true) {
              return;
            }
            if (this.errorPull === false) {
              this.errorPull = false;
              this.setState((prevState) => ({
                currentPage: prevState.currentPage + 1,
              }));
              this.saveAnswerModel();
            }
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
              <Modal
                titleAriaId={this._titleId}
                isOpen={this.state.showModal}
                onDismiss={this._closeModal}
                isBlocking={false}
                containerClassName={this.styles.container}
              >
                <div className={this.styles.header}>
                  <span id={this._titleId}>Ошибка</span>
                </div>
                <div id={this._subtitleId} className={this.styles.body}>
                  <p>Заполните обязательные поля</p>
                </div>
                <DefaultButton
                  onClick={this._closeModal}
                  text="Close"
                  style={{ margin: "20px" }}
                />
              </Modal>
            </div>
          </div>
        </div>
      );
    }
  }
}
