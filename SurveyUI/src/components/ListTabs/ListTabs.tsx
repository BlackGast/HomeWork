import * as React from "react";
import { Pivot, PivotItem, DefaultButton } from "@fluentui/react";
import { PageDesignerSurvey } from "../PageDesignerSurvey/PageDesignerSurvey";
import { PagePreviewSurvey, PageEditorJson } from "../../App";
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
            questions={props.questions}
            addQuestion={props.addQuestion}
            deleteQuestion={props.deleteQuestion}
            deletePage={props.deletePage}
            addPage={props.addPage}
            saveModel={props.saveModel}
            editCurrentItem={props.editCurrentItem}
          />
        );
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
        <DefaultButton title="Создание опроса" text="Создание опроса" />
      </div>
      <hr className="no-margin" />
      <div className="bodyPage">{renderContent(selectedKey)} </div>
    </>
  );
};
