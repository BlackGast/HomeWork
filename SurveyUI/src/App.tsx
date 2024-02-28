import Logo from "./img/Logo.png";
import "./App.scss";
import { Layout } from "./pages/Layout/Layout";
import * as React from "react";
import {
  PartialTheme,
  ThemeProvider,
  Pivot,
  PivotItem,
  Stack,
  DefaultButton,
  IIconProps,
  IStackStyles,
  TextField,
  IStackProps,
} from "@fluentui/react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { ButtonCommandBar } from "./components/ButtonCommandBar";
import { useState } from "react";
import { ISurveyModel } from "../../SurveyCore/src/model/ISurveyModel";
import { QuestionBase } from "../../SurveyCore/src/Survey/Question/QuestionBase";
initializeIcons();

const appTheme: PartialTheme = {
  palette: {},
};

export interface IAppState {
  survey: ISurveyModel;
}

// https://github.com/microsoft/fluentui/wiki/Getting-Started-with-Fluent-UI-React
export class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      survey: {
        description: "",
        pages: [],
        title: "Title",
      },
    };
  }

  public addPage(item: any): void {
    this.state.survey.pages.push(item);
    //this.setState((prevState) => ({survey: {pages: [...prevState.survey.pages]}}))
  }

  public addPanel(item: any): void {
    // this.s
  }

  public handleDeleteQuestion = (
    panel: number,
    page: number,
    key: number
  ): void => {
    const newElements: QuestionBase[] = [
      ...this.state.survey.pages[page].panels[panel].questions,
    ];
    newElements.splice(key, 1);
    //this.setState(prevState => ({pages[...newElements, prevState]}));
    console.log("delete click", key);
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
                  <PivotSeparate
                    title={this.state.survey.title}
                    description={this.state.survey.description}
                    pages={this.state.survey.pages}
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

export const PivotSeparate = (survey: ISurveyModel) => {
  const [selectedKey, setSelectedKey] = React.useState("designerPage");

  const handleLinkClick = (item?: PivotItem) => {
    if (item) {
      setSelectedKey(item.props.itemKey!);
    }
  };

  // Функция для отображения контента в зависимости от выбранного ключа
  const renderContent = (selectedKey: string) => {
    switch (selectedKey) {
      case "designerPage":
        return <PageDesignerSurvey survey={survey} />;
      case "previewPage":
        return <PagePreviewSurvey />;
      case "editorJson":
        return <PageEditorJson />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="buttonMenu">
        <Pivot
          aria-label="Separately Rendered Content Pivot Example"
          selectedKey={selectedKey}
          onLinkClick={handleLinkClick}
          headersOnly={true}
        >
          <PivotItem headerText="Редактор опроса" itemKey="designerPage" />
          <PivotItem
            headerText="Предварительный просмотр"
            itemKey="previewPage"
          />
          <PivotItem headerText="Редактор JSON" itemKey="editorJson" />
        </Pivot>
        <DefaultButton title="Создание опроса" text="Создание опроса"/>
      </div>
      <hr className="no-margin" />
      <div className="bodyPage">{renderContent(selectedKey)} </div>
    </>
  );
};

export interface IButtonProps {
  disabled?: boolean;
  checked?: boolean;
  title?: string;
  iconName?: IIconProps;
}

const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: "settings-inp" },
};

const Styles: Partial<IStackStyles> = {
  root: "container_title-survey_description",
};

export interface IPageDesignerSurveyProps {
  survey: ISurveyModel;
}

export class PageDesignerSurvey extends React.Component<IPageDesignerSurveyProps> {
  public render(): React.ReactNode {
    return (
      <div className="page bodyPage_colored">
        <div className="page_part page_part-part1">
          <div className="menu">
            <ButtonCommandBar survey={this.props.survey} />
          </div>
        </div>
        <div className="vertical-line" />
        <div className="page_part page_part-part2">
          <Page survey={this.props.survey} />
        </div>
        <div className="vertical-line" />
        <div className="page_part page_part-part3">
          <p className="settings-lbl">Настройки</p>
          <hr />
          <Stack {...columnProps}>
            <TextField label="Название" />
            <TextField label="Описание" multiline rows={2} />
          </Stack>
        </div>
      </div>
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

interface IPageState {
  elements: React.ReactNode[];
}

interface IPageProps {
  survey: ISurveyModel;
}

export class Page extends React.Component<IPageProps, IPageState> {
  
  componentDidMount(): void {
    console.log("componentDidMount");
  }

  componentDidUpdate(): void {
    console.log("componentDidUpdate");
    //this.render();
  }

  // public setElement = (item: React.ReactNode[]) => {
  //   // Page.elements = [...item];
  //   this.setState((prevState) => ({ elements: [...prevState.elements, item] }));
  // };
  private setElement = (item: React.ReactNode[]) => {
    this.setState((prevState) => ({
      elements: [...prevState.elements, ...item],
    }));
  };

  // public handleDeleteQuestion = (key: number): void => {
  //   const newElements: React.ReactNode[] = [...this.state.elements];
  //   newElements.splice(key, 1);
  //   // this.setState({ elements: newElements });
  //   this.setElement(newElements);
  //   console.log("delete click", key);
  // };
  public handleDeleteQuestion = (key: number): void => {
    const newElements: React.ReactNode[] = [...this.state.elements];
    newElements.splice(key, 1);
    this.setState({ elements: newElements });
    console.log("delete click", key);
  };

  // private setter(): void {
  //   this.setState({ element: this.elements });
  // }

  // public setProps = (prop: React.ReactNode): void => {
  //   this.setState((prevState) => ({ elements: [...prevState.elements, prop] }));
  // };
  public setProps = (prop: React.ReactNode): void => {
    this.setElement([prop]);
  };

  public render(): React.ReactNode {
    return (
      <div className="container">
        <div className="container_title-survey">
          <TextField
            borderless
            placeholder="Название опроса"
            id="surveyTitle"
          />
          <TextField
            underlined
            placeholder="Описание опроса"
            multiline
            rows={2}
            resizable={false}
            styles={Styles}
            id="surveyDescription"
          />
        </div>
        <div className="container_page">
          <div>
            <TextField borderless placeholder="Страница 1" id="pageTitle" />
            <TextField
              borderless
              placeholder="Описание страницы"
              styles={Styles}
              id="pageDescription"
            />
          </div>
          <div>
            {/* {this.state.elements.map((elements, index) => (
              <div
                className="container_page_question_item"
                key={index}
                id={index.toString()}
              >
                {elements}
              </div>
            ))} */}
            {this.props.survey.title}
          </div>
        </div>
      </div>
    );
  }
}

export const stackStyles: Partial<IStackStyles> = {
  root: "menu",
};
