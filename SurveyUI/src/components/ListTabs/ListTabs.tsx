import * as React from "react";
import { Pivot, PivotItem, DefaultButton } from "@fluentui/react";
import { PageDesignerSurvey } from "../PageDesignerSurvey/PageDesignerSurvey";
import { PageEditorJson } from "../PageEditorJson/PageEditorJson";
import { PagePreviewSurvey } from "../PagePreviewSurvey/PagePreviewSurvey";
import { IListTabsProps } from "./IListTabsProps";

export const ListTabs: React.FunctionComponent<IListTabsProps> = (props) => {
  const [selectedKey, setSelectedKey] = React.useState("designerPage");

  const handleLinkClick = (item?: PivotItem) => {
    if (item) {
      setSelectedKey(item.props.itemKey!);
    }
  };

  const renderContent = (selectedKey: string) => {
    switch (selectedKey) {
      case "designerPage":
        return (
          <PageDesignerSurvey
            survey={props.survey}
            currentItem={props.currentItem}
            currentPropertyItem={props.currentPropertyItem}
            addQuestion={props.addQuestion}
            deleteQuestion={props.deleteQuestion}
            deletePage={props.deletePage}
            addPage={props.addPage}
            saveModel={props.saveModel}
            editCurrentItem={props.editCurrentItem}
            editCurrentPropertyItem={props.editCurrentPropertyItem}
            editCurrentRequiredItem={props.editCurrentRequiredItem}
          />
        );
      case "previewPage":
        return <PagePreviewSurvey survey={props.survey} />;
      case "editorJson":
        return <PageEditorJson survey={props.survey} />;
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
        <DefaultButton title="Создание опроса" text="Создание опроса" />
      </div>
      <hr className="no-margin" />
      <div className="bodyPage">{renderContent(selectedKey)} </div>
    </>
  );
};

// export class ListTabs extends React.Component<IListTabsProps> {
//   // const [selectedKey, setSelectedKey] = React.useState("designerPage");

//   public state = {selectedKey: 'designerPage'}

//   private handleLinkClick = (item?: PivotItem) => {
//     if (item) {
//       setSelectedKey(item.props.itemKey!);
//     }
//   };

//   private renderContent = (selectedKey: string) => {
//     switch (selectedKey) {
//       case "designerPage":
//         return (
//           <PageDesignerSurvey
//             survey={this.props.survey}
//             currentItem={this.props.currentItem}
//             questions={this.props.questions}
//             addQuestion={this.props.addQuestion}
//             deleteQuestion={this.props.deleteQuestion}
//             deletePage={this.props.deletePage}
//             addPage={this.props.addPage}
//             saveModel={this.props.saveModel}
//             editCurrentItem={this.props.editCurrentItem}
//           />
//         );
//       case "previewPage":
//         return <PagePreviewSurvey />;
//       case "editorJson":
//         return <PageEditorJson />;
//       default:
//         return null;
//     }
//   };
//   public render(): React.ReactNode {

//     return (
//       <>
//         <div className="buttonMenu">
//           <Pivot
//             aria-label="Separately Rendered Content Pivot Example"
//             selectedKey={selectedKey}
//             onLinkClick={handleLinkClick}
//             headersOnly={true}
//           >
//             <PivotItem headerText="Редактор опроса" itemKey="designerPage" />
//             <PivotItem
//               headerText="Предварительный просмотр"
//               itemKey="previewPage"
//             />
//             <PivotItem headerText="Редактор JSON" itemKey="editorJson" />
//           </Pivot>
//           <DefaultButton title="Создание опроса" text="Создание опроса" />
//         </div>
//         <hr className="no-margin" />
//         <div className="bodyPage">{this.renderContent(selectedKey)} </div>
//       </>
//     );
//   }
// }
