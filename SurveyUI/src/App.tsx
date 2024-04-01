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
import { IAppState } from "./IAppState";
initializeIcons();

const appTheme: PartialTheme = {
  palette: {},
};

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
      currentItem: {
        pageId: 0,
        questionId: 0,
        item: "survey",
      },
      currentPropertyItem: {
        title: "",
        description: "",
        required: false,
        choices: [],
      },
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
  componentDidUpdate(): void {
    console.log("componentDidUpdate", this.state);
  }

  componentDidMount(): void {
    console.log("componentDidMount");
  }

  private addQuestion = (
    key?: QuestionType,
    page?: string,
    panel?: string,
    questionId?: number
  ): void => {
    if (this.surveyModel.pages.length === 0) {
      this.addPage();
      this.addPanel();
    }
    console.log(questionId);
    
    const newEmptyQuestion: IQuestionData = {
      order: this.orderList.toString(),
      id: "",
      title: "Название вопроса",
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
      //this.orderList++;
      this.surveyModel.pages[parseInt(page ?? "0")].panels[
        parseInt(panel ?? "0")
      ].order = (questionId ?? 0).toString();
    }

    if (
      this.surveyModel.pages[parseInt(page ?? "0")].panels[
        parseInt(panel ?? "0")
      ].questions.length === 0
    ) {
      this.surveyModel.pages[parseInt(page ?? "0")].panels[
        parseInt(panel ?? "0")
      ].addQuestion(newEmptyQuestion);
      //this.orderList++;
      this.surveyModel.pages[parseInt(page ?? "0")].panels[
        parseInt(panel ?? "0")
      ].order = (questionId ?? 0).toString();
    }

    console.log(this.surveyModel);
    this.saveModel();
  };

  private addPage = (): void => {
    const emptyPage: IPageData = {
      order: "",
      title: "Страница",
      panels: [],
      id: "",
      description: "Описание страницы",
    };
    if (this.surveyModel.pages.length === 0) {
      this.newModel.createModel();
      this.surveyModel = this.newModel.getModel();
      this.surveyModel.title = "Название опроса";
      this.surveyModel.description = "Описание опроса";
      this.surveyModel.pages[0].title = "Страница";
      this.surveyModel.pages[0].description = "Описание страницы";
      this.saveModel();
    } else {
      const newPage = new Page(emptyPage);
      this.surveyModel.pages.push(newPage);
      this.addPanel(this.surveyModel.pages.length - 1);
      this.addQuestion("Text", (this.surveyModel.pages.length - 1).toString());
      this.saveModel();
    }
  };

  private addPanel(page?: number): void {
    const emptyPanel: IPanelData = {
      order: "",
      id: "",
      title: "",
      description: "",
      questions: [],
    };
    if (this.surveyModel?.pages[page ?? 0].panels.length === 0) {
      this.surveyModel?.pages[page ?? 0].addPanel(emptyPanel);
      this.saveModel();
    }
  }

  private handleDeleteQuestion = (key: number, page?: number): void => {
    this.surveyModel.pages[page ?? 0].panels[0].questions.splice(key, 1);
    this.setState({
      currentItem: {
        pageId: 0,
        questionId: 0,
        item: "survey",
      },
    });
    if (
      this.surveyModel.pages[page ?? 0].panels[0].questions.length === 0
    ) {
      this.handleDeletePage(page);
    }
    this.saveModel();
  };

  private handleDeletePage = (page?: number): void => {
    this.surveyModel.pages.splice(page ?? 0, 1);
    this.setState({
      survey: this.surveyModel,
      currentItem: {
        pageId: 0,
        questionId: 0,
        item: "survey",
      },
    });
    this.saveModel();
  };

  private saveModel = (): void => {
    this.setState({
      survey: this.surveyModel,
    });
  };

  private editCurrentItem = (
    item?: string,
    pageId?: number,
    questionId?: number
  ): void => {
    this.setState({
      currentItem: {
        item: item ?? "survey",
        pageId: pageId ?? 0,
        questionId: questionId ?? 0,
      },
    });
  };

  private editCurrentPropertyItem = (
    title?: string,
    description?: string,
    required?: boolean,
    typeQuestion?: QuestionType,
    pageId?: number,
    questionId?: number
  ): void => {
    this.setState({
      currentPropertyItem: {
        title: title ?? "",
        description: description ?? "",
        required: required ?? false,
        choices: this.addChoice(pageId, questionId, typeQuestion),
      },
    });
  };

  private editCurrentRequiredItem = (required?: boolean): void => {
    this.setState({
      currentPropertyItem: {
        title: this.state.currentPropertyItem.title,
        description: this.state.currentPropertyItem.description,
        required: required ?? false,
        choices: this.state.currentPropertyItem.choices,
      },
    });
  };

  private addChoice = (
    pageId?: number,
    questionId?: number,
    typeQuestion?: QuestionType
  ): string[] => {
    const choices: string[] = [];
    if (typeQuestion === "Select" || typeQuestion === "Choice") {
      const elementsPull: any =
        this.surveyModel.pages[pageId ?? 0].panels[0].questions[
          questionId ?? 0
        ].getValue();
      elementsPull.map((element: any) => choices.push(element.title));
    }
    return choices;
  };

  private setItemSurvey = (
    title?: string,
    description?: string,
    pageId?: number
  ): void => {
    if (pageId === undefined) {
      this.surveyModel.title = title ?? "";
      this.surveyModel.description = description ?? "";
    }
    if (pageId !== undefined) {
      this.surveyModel.pages[pageId].title = title ?? "";
      this.surveyModel.pages[pageId].description = description ?? "";
    }
  };

  private parseStrToSurvey = (strSurvey?: string): void => {
    this.newModel.createModel(strSurvey);
    this.surveyModel = this.newModel.getModel();
    //this.surveyModel = this.dataManager.stringToJSON(strSurvey ?? "");
    this.saveModel();
  };

  public render(): React.ReactNode {
    return (
      <ThemeProvider theme={appTheme} style={{ height: "100%" }}>
        <Layout>
          {
            <>
              <header className="header">
                <div className="logo">
                  {/* <img src={Logo} alt="Логотип" width={150} height={60} /> */}
                </div>
              </header>
              <div className="bodyPage">
                <hr />
                <div className="bodyPage">
                  <ListTabs
                    survey={this.surveyModel}
                    currentItem={this.state.currentItem}
                    currentPropertyItem={this.state.currentPropertyItem}
                    addQuestion={this.addQuestion}
                    deleteQuestion={this.handleDeleteQuestion}
                    deletePage={this.handleDeletePage}
                    addPage={this.addPage}
                    saveModel={this.saveModel}
                    editCurrentItem={this.editCurrentItem}
                    editCurrentPropertyItem={this.editCurrentPropertyItem}
                    editCurrentRequiredItem={this.editCurrentRequiredItem}
                    setItemSurvey={this.setItemSurvey}
                    parseStrToSurvey={this.parseStrToSurvey}
                  />
                </div>
              </div>
            </>
          }
        </Layout>
      </ThemeProvider>
    );
  }
}

export const stackStyles: Partial<IStackStyles> = {
  root: "menu",
};
