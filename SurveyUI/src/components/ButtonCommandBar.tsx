import React, { useRef, useState } from "react";
import { Stack, CommandBarButton } from "@fluentui/react";
import { TextQuestion } from "./Questions/TextQuestion";
import { IButtonProps, Page, stackStyles } from "../App";
import {
  textDocument,
  checkBox,
  radioBtn,
  calendar,
  ratingStar,
} from "./IProps/IIconProps";
import { CheckboxQuestion } from "./Questions/CheckboxQuestion";
import { RadioButtonQuestion } from "./Questions/RadioButtonQuestion";
import { DataQuestion } from "./Questions/DataQuestion";
import { RatingScaleQuestion } from "./Questions/RatingScaleQuestion";

interface IButtonCommandBarProps {
  onDeleteQuestion: (key: number) => void;
}

export const ButtonCommandBar: React.FunctionComponent<IButtonProps & IButtonCommandBarProps> = (
  props
) => {
  const { disabled, checked, onDeleteQuestion } = props;
  const [elements, setElements] = useState<React.ReactNode[]>([]);
  const pageInstance = useRef<Page>(null);

  function addTextQuestion(): void {
    const newElement = (
      <TextQuestion key={elements.length} id={elements.length} onDelete={onDeleteQuestion} />
    );
    setElements((prevElement) => [...prevElement, newElement]);
    console.log(newElement);
    pageInstance.current?.setProps(newElement);
  }

  function addCheckboxQuestion(): void {
    const newElement = (
      <CheckboxQuestion key={elements.length} id={elements.length} />
    );
    setElements((prevElement) => [...prevElement, newElement]);
    pageInstance.current?.setProps(newElement);
  }

  function addRadioBtnQuestion(): void {
    const newElement = <RadioButtonQuestion key={elements.length} />;
    setElements((prevElement) => [...prevElement, newElement]);
    pageInstance.current?.setProps(newElement);
  }

  function addDataQuestion(): void {
    const newElement = <DataQuestion key={elements.length} />;
    setElements((prevElement) => [...prevElement, newElement]);
    pageInstance.current?.setProps(newElement);
  }

  function addRatingScaleQuestion(): void {
    const newElement = <RatingScaleQuestion key={elements.length} />;
    setElements((prevElement) => [...prevElement, newElement]);
    // Page.setProps(newElement);
    pageInstance.current?.setProps(newElement);
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
