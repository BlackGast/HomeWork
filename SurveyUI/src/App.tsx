import Logo from "./img/Logo.png";
import "./App.scss";
import { Layout } from "./pages/Layout/Layout";
import React from "react";
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
import { TextQuestion } from "./components/Questions/TextQuestion";
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
}

const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: "settings-inp" },
};

export const ButtonDef: React.FunctionComponent<IButtonProps> = (props) => {
  const { disabled, checked, title, iconName } = props;

  return (
    <DefaultButton
      text={title}
      allowDisabledFocus
      disabled={disabled}
      checked={checked}
      iconProps={iconName}
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
            <ButtonCommandBar />
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

export class Page extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      elements: [],
    };
  }

  static readonly newElement = (<TextQuestion key={0} />);
  static readonly elements: React.ReactNode[] = [];
  // static const [elements: any, setElements: any] = useState<React.ReactNode[]>([]);

  public static setProps(prop: React.ReactNode): void {
    this.elements.push(prop);
    console.log(this.elements);
  }

  public render(): React.ReactNode {
    return (
      <div className="container">
        <div className="container_title-survey">
          <TextField borderless placeholder="Название опроса" />
          <TextField
            underlined
            placeholder="Описание опроса"
            multiline
            rows={2}
            resizable={false}
            styles={Styles}
          />
        </div>
        <div className="container_page">
          <div>
            <TextField borderless placeholder="Страница 1" />
            <TextField
              borderless
              placeholder="Описание страницы"
              styles={Styles}
            />
          </div>
          <div>
            {Page.elements.map((element, index) => (
              // <div >{element}</div>
              <div key={index}>{element}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export const trashCan: IIconProps = {
  iconName: "Delete",
  style: {},
};

export const textDocument: IIconProps = {
  iconName: "TextDocument",
  style: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
};
export const checkBox: IIconProps = {
  iconName: "CheckboxComposite",
  style: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
};
export const radioBtn: IIconProps = {
  iconName: "RadioBtnOn",
  style: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
};
export const calendar: IIconProps = {
  iconName: "Calendar",
  style: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
};
export const ratingStar: IIconProps = {
  iconName: "FavoriteStar",
  style: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
};

export const stackStyles: Partial<IStackStyles> = {
  root: "menu",
};
