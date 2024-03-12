import * as React from "react";
import {
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
  public render(): React.ReactNode {
    if (this.props.survey.pages.length !== 0) {
      if (this.props.item === "survey") {
        return (
          <>
            <p className="settings-lbl">Настройки</p>
            <hr />
            <Stack {...columnProps}>
              <TextField label="Название" id="title" />
              <TextField label="Описание" id="description" multiline rows={2} />
              <DefaultButton
                text="Сохранить"
                onClick={() => {
                  this.props.survey.title = (
                    document.getElementById("title") as HTMLInputElement
                  ).value;
                  console.log(
                    (document.getElementById("title") as HTMLInputElement).value
                  );
                }}
              />
            </Stack>
          </>
        );
      }
    }
  }
}
