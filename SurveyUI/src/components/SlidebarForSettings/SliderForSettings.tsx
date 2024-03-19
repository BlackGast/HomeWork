import { Slider } from "@fluentui/react";
import * as React from "react";
import { ISliderForSettingsState } from "./ISliderForSettingsState";
import { ISliderForSettingsProps } from "./ISliderForSettingsProps";

export class SliderForSettings extends React.Component<
  ISliderForSettingsProps,
  ISliderForSettingsState
> {
  public state: ISliderForSettingsState = { value: 0 };

  public render(): JSX.Element {
    return (
      <Slider
        label="Basic example"
        min={2}
        max={10}
        step={1}
        defaultValue={5}
        showValue={true}
        onChange={(value: number) => {
          this.props.survey.pages[this.props.pageId].panels[0].questions[this.props.questionId].setPropertyByName('maxNum', value)
        }}
      />
    );
  }
}
