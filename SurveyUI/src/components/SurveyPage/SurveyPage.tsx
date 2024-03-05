import * as React from "react";
import { TextField } from "@fluentui/react";
import { QuestionType } from "../../../../SurveyCore/src/model/QuestionType";
import { TextQuestion } from "../Questions/TextQuestion";
import { CheckboxQuestion } from "../Questions/CheckboxQuestion";
import { RadioButtonQuestion } from "../Questions/RadioButtonQuestion";
import { DateQuestion } from "../Questions/DateQuestion";
import { RatingScaleQuestion } from "../Questions/RatingScaleQuestion";
import { ButtonAddQuestion } from "../BottonAddQuestion/ButtonAddQuestion";
import { Styles } from "./Styles";
import { ISurveyPageState } from "./ISurveyPageState";
import { ISurveyPageProps } from "./ISurveyPageProps";


export class SurveyPage extends React.Component<ISurveyPageProps, ISurveyPageState> {
  constructor(props: ISurveyPageProps) {
    super(props);
    this.state = {
      refreshState: false,
    };
  }

  private refreshPage = () => {
    this.setState(() => ({ refreshState: true }));
  };

  componentDidUpdate(): void {
    console.log("componentDidUpdate");
    if (this.state.refreshState === true) {
      this.setState(() => ({ refreshState: false }));
    }
  }

  private renderQuestion(item: QuestionType): React.ReactNode {
    switch (item) {
      case "Text":
        return (
          <TextQuestion
            id={this.props.survey.pages[0].panels[0].questions.length}
            survey={this.props.survey} />
        );
      case "Select":
        return (
          <CheckboxQuestion
            id={this.props.survey.pages[0].panels[0].questions.length} />
        );
      case "Choice":
        return <RadioButtonQuestion />;
      case "Date":
        return <DateQuestion />;
      case "Number":
        return <RatingScaleQuestion />;
      default:
        break;
    }
  }

  public render(): React.ReactNode {
    if (this.props.survey.pages.length === 0) {
      return (
        <div className="container">
          <div className="container_title-survey">
            <p>Опрос пустой. Нажмите на кнопку "Добавить вопрос."</p>
            <ButtonAddQuestion addQuestion={this.props.addQuestion} />
          </div>
        </div>
      );
    }
    if (this.props.survey.pages.length !== 0) {
      return (
        <div className="container">
          <div className="container_title-survey">
            <TextField
              borderless
              placeholder="Название опроса"
              id="surveyTitle" />
            <TextField
              underlined
              placeholder="Описание опроса"
              multiline
              rows={2}
              resizable={false}
              styles={Styles}
              id="surveyDescription" />
            {this.props.survey.pages.map((elements, index) => (
              <div key={index}>
                <div className="container_page">
                  <div>
                    <TextField
                      borderless
                      placeholder="Страница 1"
                      id="pageTitle" />
                    <TextField
                      borderless
                      placeholder="Описание страницы"
                      styles={Styles}
                      id="pageDescription" />
                  </div>
                  <div>
                    {this.props.survey.pages[0].panels[0].questions.map(
                      (elements, index) => (
                        <div key={index}>
                          {this.renderQuestion(elements.type)}
                        </div>
                      )
                    )}
                  </div>
                  <ButtonAddQuestion
                    addQuestion={this.props.addQuestion}
                    refresh={this.refreshPage} />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}
