import Logo from "./img/Logo.png";
import "./App.scss";
import { Layout } from "./pages/Layout/Layout";
import * as React from "react";
import { PartialTheme, ThemeProvider, IStackStyles } from "@fluentui/react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { ISurveyModel } from "../../SurveyCore/src/model/ISurveyModel";
import { IPageData } from "../../SurveyCore/src/model/IPageData";
import { IPanelData } from "../../SurveyCore/src/model/IPanelData";
import { IQuestionData } from "../../SurveyCore/src/model/IQuestionData";
import { QuestionType } from "../../SurveyCore/src/model/QuestionType";
import Survey from "../../SurveyCore/src/Survey/Survey";
import { DataManager } from "../../SurveyCore/src/DataManager/DataManager";
import { Page } from "../../SurveyCore/src/Survey/Page/Page";
import { ListTabs } from "./components/ListTabs/ListTabs";
initializeIcons();

const appTheme: PartialTheme = {
  palette: {},
};

export interface IAppState {
  survey: ISurveyModel;
  questions: React.ReactNode[];
}

// https://github.com/microsoft/fluentui/wiki/Getting-Started-with-Fluent-UI-React
export class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      survey: {
        description: "",
        pages: [],
        title: "",
      },
      questions: [],
    };
  }
  private orderList: number = 0;
  private dataManager: DataManager = new DataManager();
  private newModel: Survey = new Survey(this.dataManager);
  private surveyModel: ISurveyModel = {
    description: "",
    pages: [],
    title: "",
  };
  private questionPull: React.ReactNode[] = [];

  componentDidUpdate(): void {
    console.log("componentDidUpdate", this.state);
  }

  componentDidMount(): void {
    console.log("componentDidMount");
  }

  public addQuestion = (
    key?: QuestionType,
    page?: string,
    panel?: string
  ): void => {
    if (this.surveyModel.pages.length === 0) {
      this.addPage();
      this.addPanel();
    }
    const newEmptyQuestion: IQuestionData = {
      order: this.orderList.toString(),
      id: "",
      title: "",
      type: key ?? "Text",
    };
    if (
      this.surveyModel.pages[parseInt(page ?? "0")].panels[
        parseInt(panel ?? "0")
      ].questions.length !== 0
    ) {
      this.surveyModel.pages[parseInt(page ?? "0")].panels[
        parseInt(panel ?? "0")
      ].addQuestion(newEmptyQuestion);
      this.orderList++;
      this.surveyModel.pages[parseInt(page ?? "0")].panels[
        parseInt(panel ?? "0")
      ].order = this.orderList.toString();
    }
    if (
      this.surveyModel.pages[parseInt(page ?? "0")].panels[
        parseInt(panel ?? "0")
      ].questions.length === 0
    ) {
      this.surveyModel.pages[parseInt(page ?? "0")].panels[
        parseInt(panel ?? "0")
      ].addQuestion(newEmptyQuestion);
      this.orderList++;
      this.surveyModel.pages[parseInt(page ?? "0")].panels[
        parseInt(panel ?? "0")
      ].order = this.orderList.toString();
    }

    console.log(this.surveyModel);
    console.log(this.questionPull);
  };

  public addPage = (index?: number): void => {
    const emptyPage: IPageData = {
      order: "",
      title: "",
      panels: [],
      id: "",
      description: "",
    };
    if (this.surveyModel.pages.length === 0) {
      this.newModel.createModel();
      this.surveyModel = this.newModel.getModel();
      this.setState({
        survey: this.surveyModel,
      });
    } else {
      const newPage = new Page(emptyPage);
      this.surveyModel.pages.push(newPage);
      this.addPanel(this.surveyModel.pages.length - 1);
      this.addQuestion("Text", (this.surveyModel.pages.length - 1).toString());
      this.setState({
        survey: this.surveyModel,
      });
    }
  };

  public addPanel(page?: number): void {
    const emptyPanel: IPanelData = {
      order: "",
      id: "",
      title: "",
      description: "",
      questions: [],
    };
    if (this.surveyModel?.pages[page ?? 0].panels.length === 0) {
      this.surveyModel?.pages[page ?? 0].addPanel(emptyPanel);
      this.setState({
        survey: this.surveyModel,
      });
    }
  }

  public handleDeleteQuestion = (
    key: number,
    page?: number,
    panel?: number
  ): void => {
    this.surveyModel.pages[page ?? 0].panels[0].questions.splice(key, 1);
    if (
      this.surveyModel.pages.length === 0 &&
      this.surveyModel.pages[page ?? 0].panels[0].questions.length === 0
    ) {
      this.handleDeletePage(page);
    }
    this.setState({
      survey: this.surveyModel,
    });
    console.log("delete click", key);
  };

  public handleDeletePage = (
    page?: number,
    panel?: number,
    key?: number
  ): void => {
    console.log("click", page);
    this.surveyModel.pages.splice(page ?? 0, 1);
    this.setState({
      survey: this.surveyModel,
    });
  };

  public render(): React.ReactNode {
    return (
      <ThemeProvider theme={appTheme} style={{ height: "100%" }}>
        <Layout>
          {
            <>
              <header className="header">
                <div className="logo">
                  <img src={Logo} alt="Логотип" width={150} height={60} />
                </div>
              </header>
              <div className="bodyPage">
                <hr />
                <div className="bodyPage">
                  <ListTabs
                    survey={this.surveyModel}
                    questions={this.questionPull}
                    addQuestion={this.addQuestion}
                    deleteQuestion={this.handleDeleteQuestion}
                    deletePage={this.handleDeletePage}
                    addPage={this.addPage}
                  />
                </div>
              </div>
            </>
          }
          ;
        </Layout>
      </ThemeProvider>
    );
  }
}

export class PagePreviewSurvey extends React.Component {
  public render(): React.ReactNode {
    return <div>Preview Page</div>;
  }
}

export class PageEditorJson extends React.Component {
  public render(): React.ReactNode {
    return <div>Editor JSON</div>;
  }
}

export const stackStyles: Partial<IStackStyles> = {
  root: "menu",
};
