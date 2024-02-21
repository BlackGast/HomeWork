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
initializeIcons();

const appTheme: PartialTheme = {
  palette: {},
};

// https://github.com/microsoft/fluentui/wiki/Getting-Started-with-Fluent-UI-React
export class App extends React.Component<{}, { count: number }> {
  // constructor(props: {}) {
  //   super(props);
  // }

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
                  <PivotSeparate />
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

export const PivotSeparate = () => {
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
        return <PageDesignerSurvey />;
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
        <ButtonDef title="Создание опроса" />
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
  funcClick?: any;
}

const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: "settings-inp" },
};

export const ButtonDef: React.FunctionComponent<IButtonProps> = (props) => {
  const { disabled, checked, title, iconName, funcClick } = props;

  return (
    <DefaultButton
      text={title}
      allowDisabledFocus
      disabled={disabled}
      checked={checked}
      iconProps={iconName}
      onClick={funcClick}
    />
  );
};

const Styles: Partial<IStackStyles> = {
  root: "container_title-survey_description",
};

export class PageDesignerSurvey extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className="page bodyPage_colored">
        <div className="page_part page_part-part1">
          <div className="menu">
            <ButtonCommandBar onDeleteQuestion={Page.handleDeleteQuestion} />
          </div>
        </div>
        <div className="vertical-line" />
        <div className="page_part page_part-part2">
          <Page />
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

export class Page extends React.Component<{}, IPageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      elements: [],
    };
  }

  componentDidMount(): void {
    console.log("componentDidMount");
  }

  componentDidUpdate(): void {
    console.log("componentDidUpdate");
    this.render();
  }
  
  public setElement = (item: React.ReactNode[]) => {
    // Page.elements = [...item];
    this.setState((prevState) => ({ elements: [...prevState.elements, item] }));
  };

  public handleDeleteQuestion = (key: number): void => {
    const newElements: React.ReactNode[] = [...this.state.elements];
    newElements.splice(key, 1);
    this.setState({ elements: newElements });
    console.log("delete click", key);
  };
  

  // private setter(): void {
  //   this.setState({ element: this.elements });
  // }

  public setProps = (prop: React.ReactNode): void => {
    this.setState((prevState) => ({ elements: [...prevState.elements, prop] }));
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
            {this.state.elements.map((elements, index) => (
              <div
                className="container_page_question_item"
                key={index}
                id={index.toString()}
              >
                {elements}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export const stackStyles: Partial<IStackStyles> = {
  root: "menu",
};
