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
  CommandBarButton,
  TextField,
  IStackProps,
  Label,
} from "@fluentui/react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
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
}

const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: "settings-inp" },
};

export const ButtonDef: React.FunctionComponent<IButtonProps> = (props) => {
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
          <div className="container">
            <div className="container_title-survey">
              <TextField borderless placeholder="Название опроса" />
              <TextField
                underlined
                placeholder="Описание опроса"
                multiline
                rows={2}
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
                <TextQuestion />
              </div>
            </div>
          </div>
        </div>
        <div className="vertical-line" />
        <div className="page_part page_part-part3">
          <p className="settings-lbl">Настройки</p>
          <hr />
          <Stack {...columnProps}>
            <TextField label="Название" />
            <TextField label="Описание" multiline rows={3} />
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

const textDocument: IIconProps = { iconName: "TextDocument" };
const checkBox: IIconProps = { iconName: "CheckboxComposite" };
const radioBtn: IIconProps = { iconName: "RadioBtnOn" };
const calendar: IIconProps = { iconName: "Calendar" };
const ratingStar: IIconProps = { iconName: "FavoriteStar" };

const stackStyles: Partial<IStackStyles> = {
  root: "menu",
};

export const ButtonCommandBar: React.FunctionComponent<IButtonProps> = (
  props
) => {
  const { disabled, checked } = props;

  return (
    <Stack horizontal styles={stackStyles}>
      <CommandBarButton
        iconProps={textDocument}
        text="Text"
        disabled={disabled}
        checked={checked}
      />
      <CommandBarButton
        iconProps={checkBox}
        text="Checkboxes"
        disabled={disabled}
        checked={checked}
      />
      <CommandBarButton
        iconProps={radioBtn}
        text="Radio Button Text"
        disabled={disabled}
        checked={checked}
      />
      <CommandBarButton
        iconProps={calendar}
        text="Data"
        disabled={disabled}
        checked={checked}
      />
      <CommandBarButton
        iconProps={ratingStar}
        text="Rating Scale"
        disabled={disabled}
        checked={checked}
      />
    </Stack>
  );
};

export class TextQuestion extends React.Component {
  public render(): React.ReactNode {
    return (
      <>
        <div className="container_page_text">
          Text Question
          <Label>I'm a Label</Label>
          <TextField />
        </div>
      </>
    );
  }
}
export class CheckboxQuestion extends React.Component {
  public render(): React.ReactNode {
    return <div>Checkbox Question</div>;
  }
}
export class RadioButtonQuestion extends React.Component {
  public render(): React.ReactNode {
    return <div>Radio Button Question</div>;
  }
}
export class RatingScaleQuestion extends React.Component {
  public render(): React.ReactNode {
    return <div>Rating Scale Question</div>;
  }
}
export class DataQuestion extends React.Component {
  public render(): React.ReactNode {
    return <div>Data Question</div>;
  }
}
