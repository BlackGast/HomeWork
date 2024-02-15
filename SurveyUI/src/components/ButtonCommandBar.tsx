import React, { useState } from "react";
import { Stack, CommandBarButton } from "@fluentui/react";
import { TextQuestion } from "./Questions/TextQuestion";
import {
  IButtonProps,
  Page,
  stackStyles,
  textDocument,
  checkBox,
  radioBtn,
  calendar,
  ratingStar,
} from "../App";
import { CheckboxQuestion } from "./Questions/CheckboxQuestion";
import { RadioButtonQuestion } from "./Questions/RadioButtonQuestion";
import { DataQuestion } from "./Questions/DataQuestion";
import { RatingScaleQuestion } from "./Questions/RatingScaleQuestion";

export const ButtonCommandBar: React.FunctionComponent<IButtonProps> = (
  props
) => {
  const { disabled, checked } = props;
  const [elements, setElements] = useState<React.ReactNode[]>([]);

  function addTextQuestion(): void {
    const newElement = <TextQuestion key={elements.length} />;
    setElements((prevElement) => [...prevElement, newElement]);
    Page.setProps(newElement);
  }

  function addCheckboxQuestion(): void {
    const newElement = <CheckboxQuestion key={elements.length} />;
    setElements((prevElement) => [...prevElement, newElement]);
    Page.setProps(newElement);
  }

  function addRadioBtnQuestion(): void {
    const newElement = <RadioButtonQuestion key={elements.length} />;
    setElements((prevElement) => [...prevElement, newElement]);
    Page.setProps(newElement);
  }

  function addDataQuestion(): void {
    const newElement = <DataQuestion key={elements.length} />;
    setElements((prevElement) => [...prevElement, newElement]);
    Page.setProps(newElement);
  }

  function addRatingScaleQuestion(): void {
    const newElement = <RatingScaleQuestion key={elements.length} />;
    setElements((prevElement) => [...prevElement, newElement]);
    Page.setProps(newElement);
  }

  return (
    <Stack horizontal styles={stackStyles}>
      <CommandBarButton
        iconProps={textDocument}
        text="Text"
        disabled={disabled}
        checked={checked}
        onClick={addTextQuestion}
        styles={{ textContainer: { textAlign: "left" } }}
      />
      <CommandBarButton
        iconProps={checkBox}
        text="Checkboxes"
        disabled={disabled}
        checked={checked}
        onClick={addCheckboxQuestion}
        styles={{ textContainer: { textAlign: "left" } }}
      />
      <CommandBarButton
        iconProps={radioBtn}
        text="Radio Button Text"
        disabled={disabled}
        checked={checked}
        onClick={addRadioBtnQuestion}
        styles={{ textContainer: { textAlign: "left" } }}
      />
      <CommandBarButton
        iconProps={calendar}
        text="Data"
        disabled={disabled}
        checked={checked}
        onClick={addDataQuestion}
        styles={{ textContainer: { textAlign: "left" } }}
      />
      <CommandBarButton
        iconProps={ratingStar}
        text="Rating Scale"
        disabled={disabled}
        checked={checked}
        onClick={addRatingScaleQuestion}
        styles={{ textContainer: { textAlign: "left" } }}
      />
    </Stack>
  );
};
