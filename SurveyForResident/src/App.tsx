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
  }

  private surveyModel: ISurveyModel = {
    description: "",
    pages: [],
    title: "",
  };

  private saveToModel = (model: string): void => {
    const dataManager: DataManager = new DataManager();
    const newModel: Survey = new Survey(dataManager);
    const survey: ISurveyModel = newModel.createModel(model);
    this.surveyModel = survey;
    this.setState({
      surveyModel: survey,
    });
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
                getModelJSON={this.getModelFromJSON}
                // surveyModel={this.surveyModel}
              />
            </div>
          }
        </Layout>
      </ThemeProvider>
    );
  }
}
