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
      title: "",
      description: "",
      choices: [],
    };
  }

  componentDidUpdate(prevProps: IPropertyPanelProps): void {
    if (
      this.props.propertyItem !== prevProps.propertyItem
    ) {
      this.setState({
        checked: this.props.propertyItem.required,
        choices: this.props.propertyItem.choices,
        description: this.props.propertyItem.description,
        title: this.props.propertyItem.title,
      });
    }
    console.log("componentDidUpdate PropertyPanel");
  }

  // componentDidMount(): void {
  //   this.setState({
  //     checked: this.props.propertyItem.required,
  //     choices: this.props.propertyItem.choices,
  //     description: this.props.propertyItem.description,
  //     title: this.props.propertyItem.title,
  //   });
  // }

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
                defaultValue={`${this.props.survey.title}`}
                onBlur={() => {
                  const tmpTitle = document.getElementById(
                    "title"
                  ) as HTMLInputElement;
                  this.props.survey.title = tmpTitle.value;
                  console.log(
                    (document.getElementById("title") as HTMLInputElement).value
                  );
                  console.log(this.props.survey.title);
                }}
              />
              {/* <h1>{this.props.survey.title}</h1> */}
              <TextField
                label="Описание"
                id="description"
                multiline
                rows={2}
                defaultValue={`${this.props.survey.description}`}
                onBlur={() => {
                  this.props.survey.description = (
                    document.getElementById("description") as HTMLInputElement
                  ).value;
                }}
              />
              <DefaultButton
                text="Сохранить"
                onClick={() => {
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
            <p className="settings-lbl">
              Настройки страницы {(pageIndex ?? 0) + 1}
            </p>
            <hr />
            <Stack {...columnProps}>
              <TextField
                label="Название страницы"
                id="title"
                defaultValue={`${
                  this.state.title
                  // this.props.survey.pages[this.props.pageId].title
                }`}
              />
              {/* <h1>{this.props.survey.pages[this.props.pageId ?? 0].title}</h1> */}
              <TextField
                label="Описание"
                id="description"
                multiline
                rows={2}
                defaultValue={`${this.state.description}`}
              />
              <DefaultButton
                text="Сохранить"
                onClick={() => {
                  this.props.survey.pages[this.props.pageId].title = (
                    document.getElementById("title") as HTMLInputElement
                  ).value;
                  this.props.survey.pages[this.props.pageId].description = (
                    document.getElementById("description") as HTMLInputElement
                  ).value;
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
                  value={`${this.state.title}`}
                  // onChange={}
                  // тут надо прокинуть пропсом функцию editCurrentPropertyItem чтобы обновить state в App
                />
                <TextField
                  label="Описание"
                  id="description"
                  multiline
                  rows={2}
                  value={`${this.state.description}`}
                />
                <CheckboxForQuestion
                  checked={this.state.checked}
                  survey={this.props.survey}
                  pageId={this.props.pageId}
                  questionId={this.props.questionId}
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
                  defaultValue={`${this.state.title}`}
                />
                <TextField
                  label="Описание"
                  id="description"
                  multiline
                  rows={2}
                  defaultValue={`${this.state.description}`}
                />
                {ItemsValue.map((elements: any, indexChoice: number) => (
                  <div key={indexChoice} style={{ display: "flex" }}>
                    <TextField
                      id={`choiceTitle-${indexChoice}`}
                      defaultValue={this.state.choices[indexChoice]}
                      onBlur={() => {
                        const valueTitle = (
                          document.getElementById(
                            `choiceTitle-${indexChoice}`
                          ) as HTMLInputElement
                        ).value;
                        this.props.survey.pages[
                          this.props.pageId
                        ].panels[0].questions[
                          this.props.questionId
                        ].setFieldByName("title", valueTitle, indexChoice);
                        console.log(
                          (
                            document.getElementById(
                              `choiceTitle-${indexChoice}`
                            ) as HTMLInputElement
                          ).value,
                          indexChoice
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
                  defaultValue={`${this.state.title}`}
                />
                <TextField
                  label="Описание"
                  id="description"
                  multiline
                  rows={2}
                  defaultValue={`${this.state.description}`}
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
