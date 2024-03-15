import * as React from "react";
import {
  Checkbox,
  DefaultButton,
  Stack,
  TextField,
} from "@fluentui/react";
import { columnProps } from "./columnProps";
import { IPropertyPanelProps } from "./IPropertyPanelProps";
import { IPropertyPanelState } from "./IPropertyPanelState";

export class PropertyPanel extends React.Component<
  IPropertyPanelProps,
  IPropertyPanelState
> {
  constructor(props: IPropertyPanelProps) {
    super(props);
    this.state = {
      checked: false,
    };
  }
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
                  this.props.survey.pages[this.props.pageId].title
                }`}
              />
              {/* <h1>{this.props.survey.pages[this.props.pageId ?? 0].title}</h1> */}
              <TextField
                label="Описание"
                id="description"
                multiline
                rows={2}
                defaultValue={`${
                  this.props.survey.pages[this.props.pageId].description
                }`}
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
        return (
          <>
            <p className="settings-lbl">Настройки вопроса</p>
            <hr />
            <Stack {...columnProps}>
              <TextField
                label="Название вопроса"
                id="title"
                defaultValue={`${
                  this.props.survey.pages[this.props.pageId].panels[0]
                    .questions[this.props.questionId].title
                }`}
              />
              <TextField
                label="Описание"
                id="description"
                multiline
                rows={2}
                defaultValue={`${
                  this.props.survey.pages[this.props.pageId].panels[0]
                    .questions[this.props.questionId].description
                }`}
              />
              <Checkbox
                label="Обязательно"
                onChange={() => {
                  if (this.state.checked === false) {
                    this.setState({
                      checked: true,
                    });
                    this.props.survey.pages[
                      this.props.pageId
                    ].panels[0].questions[this.props.questionId].required =
                      this.state.checked;
                    console.log(
                      this.props.survey.pages[this.props.pageId].panels[0]
                        .questions[this.props.questionId].required
                    );
                  }
                  if (this.state.checked === true) {
                    this.setState({
                      checked: false,
                    });
                    this.props.survey.pages[
                      this.props.pageId
                    ].panels[0].questions[this.props.questionId].required =
                      this.state.checked;
                    console.log(
                      this.props.survey.pages[this.props.pageId].panels[0]
                        .questions[this.props.questionId].required
                    );
                  }
                }}
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
