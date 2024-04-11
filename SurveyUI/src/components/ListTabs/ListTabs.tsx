import * as React from "react";
import { Pivot, PivotItem } from "@fluentui/react";
import { PageDesignerSurvey } from "../PageDesignerSurvey/PageDesignerSurvey";
import { PageEditorJson } from "../PageEditorJson/PageEditorJson";
import { PagePreviewSurvey } from "../PagePreviewSurvey/PagePreviewSurvey";
import { IListTabsProps } from "./IListTabsProps";

export class ListTabs extends React.Component<
  IListTabsProps,
  { selectedKey: string }
> {
  constructor(props: IListTabsProps) {
    super(props);

    this.state = {
      selectedKey: "designerPage",
    };
  }

  public render(): React.ReactNode {
    return (
      <>
        <div className="buttonMenu">
          <Pivot
            aria-label="Separately Rendered Content Pivot Example"
            selectedKey={this.state.selectedKey}
            onLinkClick={this.handleLinkClick}
            headersOnly={true}
          >
            <PivotItem headerText="Редактор опроса" itemKey="designerPage" />
            <PivotItem
              headerText="Предварительный просмотр"
              itemKey="previewPage"
            />
            <PivotItem headerText="Редактор JSON" itemKey="editorJson" />
          </Pivot>
          {/* <DefaultButton title="Создание опроса" text="Создание опроса" /> */}
        </div>
        <hr className="no-margin" />
        <div className="bodyPage">
          {this.renderContent(this.state.selectedKey)}
        </div>
      </>
    );
  }

  private handleLinkClick = (item?: PivotItem) => {
    if (item) {
      this.setState({ selectedKey: item.props.itemKey! });
    }
  };

  private renderContent = (selectedKey: string) => {
    switch (selectedKey) {
      case "designerPage":
        return (
          <PageDesignerSurvey
            survey={this.props.survey}
            currentItem={this.props.currentItem}
            currentPropertyItem={this.props.currentPropertyItem}
            addQuestion={this.props.addQuestion}
            deleteQuestion={this.props.deleteQuestion}
            deletePage={this.props.deletePage}
            addPage={this.props.addPage}
            saveModel={this.props.saveModel}
            editCurrentItem={this.props.editCurrentItem}
            editCurrentPropertyItem={this.props.editCurrentPropertyItem}
            editCurrentRequiredItem={this.props.editCurrentRequiredItem}
            setItemSurvey={this.props.setItemSurvey}
          />
        );
      case "previewPage":
        return <PagePreviewSurvey survey={this.props.survey} />;
      case "editorJson":
        return (
          <PageEditorJson
            survey={this.props.survey}
            parseStrToSurvey={this.props.parseStrToSurvey}
          />
        );
      default:
        return null;
    }
  };
}
