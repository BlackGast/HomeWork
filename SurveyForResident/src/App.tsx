import "./App.scss";
import { Layout } from "./pages/Layout/Layout";
import * as React from "react";
import { PartialTheme, ThemeProvider } from "@fluentui/react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { ISurveyModel } from "../../SurveyCore/src/model/ISurveyModel";
import Survey from "../../SurveyCore/src/Survey/Survey";
import { DataManager } from "../../SurveyCore/src/DataManager/DataManager";
import { IAppState } from "./IAppState";
import { PagePreviewSurvey } from "./components/PagePreviewSurvey/PagePreviewSurvey";
initializeIcons();

const appTheme: PartialTheme = {
  palette: {},
};

// https://github.com/microsoft/fluentui/wiki/Getting-Started-with-Fluent-UI-React
export class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      surveyModel: {
        description: "",
        pages: [],
        title: "",
      },
    };
  }

  componentDidMount(): void {
    this.getModelFromJSON();
    console.log(this.state.surveyModel);

    // this.saveModel();
  }

  // private dataManager: DataManager = new DataManager();
  // private newModel: Survey = new Survey(this.dataManager);
  private surveyModel: ISurveyModel = {
    description: "",
    pages: [],
    title: "",
  };

  // /**
  //  * Функция сохранения модели в состояние
  //  */
  // private saveModel = (): void => {
  //   this.setState({
  //     surveyModel: this.surveyModel,
  //   });
  // };

  private saveToModel = (model: string): void => {
    const dataManager: DataManager = new DataManager();
    const newModel: Survey = new Survey(dataManager);
    let surveyModel: ISurveyModel = {
      description: "",
      pages: [],
      title: "",
    };
    surveyModel = newModel.createModel(model);
    // console.log(surveyModel);
    this.surveyModel = surveyModel;
    this.setState({
      surveyModel: surveyModel,
    });
    // console.log(model);

    // this.saveModel();
  };

  private getModelFromJSON = (): void => {
    fetch("/QUESTION.JSON")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.saveToModel(data);
      });
  };

  public render(): React.ReactNode {
    return (
      <ThemeProvider theme={appTheme} style={{ height: "100%" }}>
        <Layout>
          {
            <div className="bodyPage">
              <PagePreviewSurvey
                survey={this.surveyModel}
                // surveyModel={this.surveyModel}
              />
            </div>
          }
        </Layout>
      </ThemeProvider>
    );
  }
}
