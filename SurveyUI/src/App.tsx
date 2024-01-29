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
            /* <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <PrimaryButton onClick={() => this.setState({ count: count + 1 })}>
              count is {count}
            </PrimaryButton>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p> */

            <>
              <header className="header">
                <div className="logo">
                  <img src={Logo} alt="Логотип" width={127} height={60} />
                </div>
              </header>
              <div>
                <hr />
                <div>
                  <PivotSeparateExample />
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

const getTabId = (itemKey: string) => {
  return `ShapeColorPivot_${itemKey}`;
};

export const PivotSeparateExample = () => {
  const [selectedKey, setSelectedKey] = React.useState("rectangleRed");

  const handleLinkClick = (item?: PivotItem) => {
    if (item) {
      setSelectedKey(item.props.itemKey!);
    }
  };

  return (
    <div>
      <div className="buttonMenu">
        <Pivot
          aria-label="Separately Rendered Content Pivot Example"
          selectedKey={selectedKey}
          // eslint-disable-next-line react/jsx-no-bind
          onLinkClick={handleLinkClick}
          headersOnly={true}
          getTabId={getTabId}
          >
          <PivotItem headerText="Редактор опроса" itemKey="rectangleRed" />
          <PivotItem headerText="Предварительный просмотр" itemKey="squareRed" />
          <PivotItem headerText="Редактор JSON" itemKey="rectangleGreen" />
        </Pivot>
        <ButtonDef title="Создание опроса" />
      </div>
      
          <div
            aria-labelledby={getTabId(selectedKey)}
            role="tabpanel"
            style={{
              //position: "relative",
              float: "none",
              width: 100,
              height: selectedKey === "squareRed" ? 100 : 200,
              background: selectedKey === "rectangleGreen" ? "green" : "red",
            }}
          />
    </div>
  );
};

// const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
//   root: { marginTop: 10 },
// };

// export const PivotBasicExample: React.FunctionComponent = () => {
//   return (
//     <div className="buttonMenu">
//     <Pivot aria-label="Basic Pivot Example">
//       <PivotItem
//         headerText="My Files"
//         headerButtonProps={{
//           'data-order': 1,
//           'data-title': 'My Files Title',
//         }}
//       >
//         <Label styles={labelStyles}>Pivot #1</Label>
//       </PivotItem>
//       <PivotItem headerText="Recent">
//         <Label styles={labelStyles}>Pivot #2</Label>
//       </PivotItem>
//       <PivotItem headerText="Shared with me">
//         <Label styles={labelStyles}>Pivot #3</Label>
//       </PivotItem>
//     </Pivot>
//     <ButtonDef title="Создание опроса" />
//     </div>
//   );
// };

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
    return <div>text</div>;
  }
}
