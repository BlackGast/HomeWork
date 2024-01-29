import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Logo from "./img/Logo.png";
import starIcon from "./img/Star Icon.svg";
import calendarIcon from "./img/Calendar icon.svg";
import radioButtonIcon from "./img/RadioButton Icon.svg";
import textIcon from "./img/Text Icon.svg";
import checkBoxIcon from "./img/CheckBox Icon.svg";
import "./App.scss";
import { Layout } from "./pages/Layout/Layout";
import React from "react";
import {
  PartialTheme,
  PrimaryButton,
  ThemeProvider,
  IStyleSet,
  Label,
  ILabelStyles,
  Pivot,
  PivotItem,
  IStackTokens,
  Stack,
  DefaultButton,
} from "@fluentui/react";

const appTheme: PartialTheme = {
  palette: {},
};

// https://github.com/microsoft/fluentui/wiki/Getting-Started-with-Fluent-UI-React
export class App extends React.Component<{}, { count: number }> {
  constructor(props: {}) {
    super(props);
  }
  public render(): React.ReactNode {
    return (
      <ThemeProvider theme={appTheme}>
        <Layout>
          {
            <>
              <header className="header">
                <div className="logo">
                  <img src={Logo} alt="Логотип" width={127} height={60} />
                </div>
              </header>
              <div>
                <hr />
                <div>
                  <PivotSeparate />
                  {/* <button className="btn">Создание опроса</button> */}
                </div>
              </div>
            </>
          }
        </Layout>
      </ThemeProvider>
    );
  }
}

export const PivotSeparate = () => {
  const [selectedKey, setSelectedKey] = React.useState('rectangleRed');

  const handleLinkClick = (item?: PivotItem) => {
    if (item) {
      setSelectedKey(item.props.itemKey!);
    }
  };

  // Функция для отображения контента в зависимости от выбранного ключа
  const renderContent = (selectedKey: string) => {
    switch (selectedKey) {
      case 'designerPage':
        return <PageDesignerSurvey />;
      case 'previewPage':
        return <PagePreviewSurvey />;
      case 'editirJson':
        return <PageEditorJson />;
      default:
        return <PageDesignerSurvey />;
    }
  };

  return (
    <>
      <div className="buttonMenu">
        <Pivot
          aria-label="Separately Rendered Content Pivot Example"
          selectedKey={selectedKey}
          // eslint-disable-next-line react/jsx-no-bind
          onLinkClick={handleLinkClick}
          headersOnly={true}
        >
          <PivotItem headerText="Редактор опроса" itemKey="designerPage" />
          <PivotItem headerText="Предварительный просмотр" itemKey="previewPage" />
          <PivotItem headerText="Редактор JSON" itemKey="editirJson" />
        </Pivot>
        <ButtonDef title="Создание опроса"/>
      </div>
      <div>
        {renderContent(selectedKey)} {/* Отображаем контент в зависимости от selectedKey */}
      </div>
    </>
  );
};

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
  title?: string;
}
export const ButtonDef: React.FunctionComponent<IButtonExampleProps> = (
  props
) => {
  const { disabled, checked, title } = props;

  return (
    <DefaultButton
      text={title}
      allowDisabledFocus
      disabled={disabled}
      checked={checked}
    />
  );
};

export class PageDesignerSurvey extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>Designer Page</div>
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
    return <div>Editir JSON</div>;
  }
}