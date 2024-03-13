import * as React from "react";
import {
  Checkbox,
  DefaultButton,
  Stack,
  TextField,
  getElementIndexPath,
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
      refreshState: false,
    };
  }

  private refreshPage = (): void => {
    this.setState(() => ({ refreshState: true }));
  };

  componentDidUpdate(): void {
    // console.log("componentDidUpdate", this.state.refreshState);
    if (this.state.refreshState === true) {
      this.setState(() => ({ refreshState: false }));
    }
  }

  private _onChange(
    ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
    isChecked?: boolean
  ) {
    console.log(`The option has been changed to ${isChecked}.`);
  }

  public render(): React.ReactNode {
    if (this.props.survey.pages.length !== 0) {
      if (this.props.item === "survey") {
        return (
          <>
            <p className="settings-lbl">Настройки</p>
            <hr />
            <Stack {...columnProps}>
              <TextField
                label="Название"
                id="title"
                defaultValue={`${this.props.survey.title}`}
              />
              <TextField
                label="Описание"
                id="description"
                multiline
                rows={2}
                defaultValue={`${this.props.survey.description}`}
              />
              <DefaultButton
                text="Сохранить"
                onClick={() => {
                  this.props.survey.title = (
                    document.getElementById("title") as HTMLInputElement
                  ).value;
                  this.props.survey.description = (
                    document.getElementById("description") as HTMLInputElement
                  ).value;
                  this.props.refreshState();
                  this.refreshPage();
                  this.props.saveModel();
                }}
              />
            </Stack>
          </>
        );
      }
      if (this.props.item === "page") {
        return (
          <>
            <p className="settings-lbl">Настройки</p>
            <hr />
            <Stack {...columnProps}>
              <TextField
                label="Название"
                id="title"
                defaultValue={`${
                  this.props.survey.pages[this.props.pageId ?? 0].title
                }`}
              />
              <TextField
                label="Описание"
                id="description"
                multiline
                rows={2}
                defaultValue={`${
                  this.props.survey.pages[this.props.pageId ?? 0].description
                }`}
              />
              <DefaultButton
                text="Сохранить"
                onClick={() => {
                  this.props.survey.pages[this.props.pageId ?? 0].title = (
                    document.getElementById("title") as HTMLInputElement
                  ).value;
                  this.props.survey.pages[this.props.pageId ?? 0].description =
                    (
                      document.getElementById("description") as HTMLInputElement
                    ).value;
                  this.props.refreshState();
                  this.refreshPage();
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
            <p className="settings-lbl">Настройки</p>
            <hr />
            <Stack {...columnProps}>
              <TextField
                label="Название"
                id="title"
                defaultValue={`${
                  this.props.survey.pages[this.props.pageId ?? 0].panels[0]
                    .questions[this.props.questionId ?? 0].title
                }`}
              />
              <TextField
                label="Описание"
                id="description"
                multiline
                rows={2}
                defaultValue={`${
                  this.props.survey.pages[this.props.pageId ?? 0].panels[0]
                    .questions[this.props.questionId ?? 0].description
                }`}
              />
              <Checkbox label="Обязательно" onChange={this._onChange} />
              <DefaultButton
                text="Сохранить"
                onClick={() => {
                  this.props.survey.pages[
                    this.props.pageId ?? 0
                  ].panels[0].questions[this.props.questionId ?? 0].title = (
                    document.getElementById("title") as HTMLInputElement
                  ).value;
                  this.props.survey.pages[
                    this.props.pageId ?? 0
                  ].panels[0].questions[
                    this.props.questionId ?? 0
                  ].description = (
                    document.getElementById("description") as HTMLInputElement
                  ).value;
                  this.props.refreshState();
                  this.refreshPage();
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
