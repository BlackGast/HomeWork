import * as React from "react";
import { DefaultButton, IconButton, Stack, TextField } from "@fluentui/react";
import { columnProps } from "./columnProps";
import { IPropertyPanelProps } from "./IPropertyPanelProps";
import { IPropertyPanelState } from "./IPropertyPanelState";
import { CheckboxForQuestion } from "../CheckboxForQuestion/CheckboxForQuestion";
import { trashCan } from "../IProps/IIconProps";
import { SliderForSettings } from "../SliderbarForSettings/SliderForSettings";

export class PropertyPanel extends React.Component<
  IPropertyPanelProps,
  IPropertyPanelState
> {
  constructor(props: IPropertyPanelProps) {
    super(props);
    this.state = {
      checked: false,
      title: this.props.propertyItem.title,
      description: this.props.propertyItem.description,
      choices: [],
    };
  }

  componentDidUpdate(prevProps: IPropertyPanelProps): void {
    if (this.props.propertyItem !== prevProps.propertyItem) {
      this.setState({
        choices: this.props.propertyItem.choices,
        description: this.props.propertyItem.description,
        title: this.props.propertyItem.title,
      });
    }
    //console.log("componentDidUpdate PropertyPanel");
  }

  private editCurrentQuestionChoiceItem = (
    indexChoice: number,
    valueTitle: string
  ): void => {
    this.props.survey.pages[this.props.pageId].panels[0].questions[
      this.props.questionId
    ].setFieldByName("title", valueTitle, indexChoice);
  };

  public render(): React.ReactNode {
    if (this.props.survey.pages.length !== 0) {
      if (this.props.item === "survey") {
        return (
          <>
            <p className="settings-lbl">Настройки опроса</p>
            <hr />
            <Stack {...columnProps}>
              <TextField
                label="Название опроса"
                id="title"
                value={this.state.title}
                onChange={(e) => {
                  this.setState({
                    title: e.currentTarget.value,
                  });
                }}
              />
              <TextField
                label="Описание"
                id="description"
                multiline
                rows={2}
                value={this.state.description}
                onChange={(e) => {
                  this.setState({
                    description: e.currentTarget.value,
                  });
                }}
              />
              <DefaultButton
                text="Сохранить"
                onClick={() => {
                  this.props.setItemSurvey(
                    this.state.title,
                    this.state.description
                  );
                  this.props.saveModel();
                }}
              />
            </Stack>
          </>
        );
      }
      if (this.props.item === "page") {
        const pageIndex = this.props.pageId ?? 0;
        return (
          <>
            <p className="settings-lbl">Настройки страницы {pageIndex + 1}</p>
            <hr />
            <Stack {...columnProps}>
              <TextField
                label="Название страницы"
                id="title"
                value={this.state.title}
                onChange={(e) => {
                  this.setState({
                    title: e.currentTarget.value,
                  });
                }}
              />
              <TextField
                label="Описание"
                id="description"
                multiline
                rows={2}
                value={this.state.description}
                onChange={(e) => {
                  this.setState({
                    description: e.currentTarget.value,
                  });
                }}
              />
              <DefaultButton
                text="Сохранить"
                onClick={() => {
                  this.props.setItemSurvey(
                    this.state.title,
                    this.state.description,
                    this.props.pageId
                  );
                  this.props.saveModel();
                }}
              />
            </Stack>
          </>
        );
      }
      if (this.props.item === "question") {
        if (
          this.props.survey.pages[this.props.pageId].panels[0].questions[
            this.props.questionId
          ].type === "Text" ||
          this.props.survey.pages[this.props.pageId].panels[0].questions[
            this.props.questionId
          ].type === "Date"
        ) {
          return (
            <>
              <p className="settings-lbl">Настройки вопроса</p>
              <hr />
              <Stack {...columnProps}>
                <TextField
                  label="Название вопроса"
                  id="title"
                  value={this.state.title}
                  onChange={(e) => {
                    this.setState({
                      title: e.currentTarget.value,
                    });
                  }}
                />
                <TextField
                  label="Описание"
                  id="description"
                  multiline
                  rows={2}
                  value={this.state.description}
                  onChange={(e) => {
                    this.setState({
                      description: e.currentTarget.value,
                    });
                  }}
                />
                <CheckboxForQuestion
                  checked={
                    this.props.survey.pages[this.props.pageId].panels[0]
                      .questions[this.props.questionId].required
                  }
                  survey={this.props.survey}
                  pageId={this.props.pageId}
                  questionId={this.props.questionId}
                  editCurrentRequiredItem={this.props.editCurrentRequiredItem}
                />
                <DefaultButton
                  text="Сохранить"
                  onClick={() => {
                    this.props.survey.pages[
                      this.props.pageId
                    ].panels[0].questions[this.props.questionId].title = (
                      document.getElementById("title") as HTMLInputElement
                    ).value;
                    this.props.survey.pages[
                      this.props.pageId
                    ].panels[0].questions[this.props.questionId].description = (
                      document.getElementById("description") as HTMLInputElement
                    ).value;
                    this.props.saveModel();
                  }}
                />
              </Stack>
            </>
          );
        }

        if (
          this.props.survey.pages[this.props.pageId].panels[0].questions[
            this.props.questionId
          ].type === "Select" ||
          this.props.survey.pages[this.props.pageId].panels[0].questions[
            this.props.questionId
          ].type === "Choice"
        ) {
          const ItemsValue: any =
            this.props.survey.pages[this.props.pageId].panels[0].questions[
              this.props.questionId
            ].getValue();
          return (
            <>
              <p className="settings-lbl">Настройки вопроса</p>
              <hr />
              <Stack {...columnProps}>
                <TextField
                  label="Название вопроса"
                  id="title"
                  value={this.state.title}
                  onChange={(e) => {
                    this.setState({
                      title: e.currentTarget.value,
                    });
                  }}
                />
                <TextField
                  label="Описание"
                  id="description"
                  multiline
                  rows={2}
                  value={this.state.description}
                  onChange={(e) => {
                    this.setState({
                      description: e.currentTarget.value,
                    });
                  }}
                />
                {ItemsValue.map((elements: any, indexChoice: number) => (
                  <div key={elements.id} style={{ display: "flex" }}>
                    <TextField
                      id={`choiceTitle-${indexChoice}`}
                      defaultValue={ItemsValue[indexChoice].title}
                      onChange={(e) => {
                        this.editCurrentQuestionChoiceItem(
                          indexChoice,
                          e.currentTarget.value
                        );
                      }}
                    />
                    <IconButton
                      iconProps={trashCan}
                      onClick={() => {
                        this.props.survey.pages[
                          this.props.pageId
                        ].panels[0].questions[
                          this.props.questionId
                        ].deleteChoice(indexChoice);
                        this.props.saveModel();
                      }}
                    />
                  </div>
                ))}
                <DefaultButton
                  text="Добавить ответ"
                  onClick={() => {
                    this.props.survey.pages[
                      this.props.pageId
                    ].panels[0].questions[this.props.questionId].addChoice();
                    this.props.saveModel();
                  }}
                />
                <CheckboxForQuestion
                  checked={this.props.propertyItem.required}
                  survey={this.props.survey}
                  pageId={this.props.pageId}
                  questionId={this.props.questionId}
                  editCurrentRequiredItem={this.props.editCurrentRequiredItem}
                />
                <DefaultButton
                  text="Сохранить"
                  onClick={() => {
                    this.props.survey.pages[
                      this.props.pageId
                    ].panels[0].questions[this.props.questionId].title = (
                      document.getElementById("title") as HTMLInputElement
                    ).value;
                    this.props.survey.pages[
                      this.props.pageId
                    ].panels[0].questions[this.props.questionId].description = (
                      document.getElementById("description") as HTMLInputElement
                    ).value;
                    this.props.saveModel();
                  }}
                />
              </Stack>
            </>
          );
        }
        if (
          this.props.survey.pages[this.props.pageId].panels[0].questions[
            this.props.questionId
          ].type === "Number"
        ) {
          return (
            <>
              <p className="settings-lbl">Настройки вопроса</p>
              <hr />
              <Stack {...columnProps}>
                <TextField
                  label="Название вопроса"
                  id="title"
                  value={`${this.state.title}`}
                  onChange={(e) => {
                    this.setState({
                      title: e.currentTarget.value,
                    });
                  }}
                />
                <TextField
                  label="Описание"
                  id="description"
                  multiline
                  rows={2}
                  value={`${this.state.description}`}
                  onChange={(e) => {
                    this.setState({
                      description: e.currentTarget.value,
                    });
                  }}
                />
                <SliderForSettings
                  survey={this.props.survey}
                  pageId={this.props.pageId}
                  questionId={this.props.questionId}
                />
                <CheckboxForQuestion
                  checked={this.props.propertyItem.required}
                  survey={this.props.survey}
                  pageId={this.props.pageId}
                  questionId={this.props.questionId}
                  editCurrentRequiredItem={this.props.editCurrentRequiredItem}
                />
                <DefaultButton
                  text="Сохранить"
                  onClick={() => {
                    this.props.survey.pages[
                      this.props.pageId
                    ].panels[0].questions[this.props.questionId].title = (
                      document.getElementById("title") as HTMLInputElement
                    ).value;
                    this.props.survey.pages[
                      this.props.pageId
                    ].panels[0].questions[this.props.questionId].description = (
                      document.getElementById("description") as HTMLInputElement
                    ).value;
                    this.props.saveModel();
                  }}
                />
              </Stack>
            </>
          );
        }
      }
    }
  }
}
