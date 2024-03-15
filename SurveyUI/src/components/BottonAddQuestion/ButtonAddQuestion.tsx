import * as React from "react";
import { DefaultButton, IContextualMenuProps } from "@fluentui/react";
import {
  calendar,
  checkBox,
  radioBtn,
  ratingStar,
  textDocument
} from "../IProps/IIconProps";
import { QuestionType } from "../../../../SurveyCore/src/model/QuestionType";
import { IButtonAddQuestionProps } from "./IButtonAddQuestionProps";
import { IButtonProps } from "./IButtonProps";


export const ButtonAddQuestion: React.FunctionComponent<
  IButtonProps & IButtonAddQuestionProps
> = (props) => {
  const addQuest = (key: QuestionType): void => {
    props.addQuestion(key, props.pageIndex ?? 0);
  };

  const menuProps: IContextualMenuProps = {
    items: [
      {
        id: "Text",
        key: "textQuestion",
        text: "Text",
        iconProps: textDocument,
        onClick: () => {
          addQuest("Text");
        },
      },
      {
        id: "Select",
        key: "checkboxesQuestion",
        text: "Checkboxes",
        iconProps: checkBox,
        onClick: () => {
          addQuest("Select");
        },
      },
      {
        id: "Choice",
        key: "radioBtnQuestion",
        text: "Radio Button Text",
        iconProps: radioBtn,
        onClick: () => {
          addQuest("Choice");
        },
      },
      {
        id: "Date",
        key: "dataQuestion",
        text: "Data",
        iconProps: calendar,
        onClick: () => {
          addQuest("Date");
        },
      },
      {
        id: "Number",
        key: "ratingScaleQuestion",
        text: "Rating Scale",
        iconProps: ratingStar,
        onClick: () => {
          addQuest("Number");
        },
      },
    ],
  };
  return (
    <DefaultButton
      text="Добавить вопрос"
      split
      splitButtonAriaLabel="See 2 options"
      aria-roledescription="split button"
      menuProps={menuProps}
      disabled={props.disabled}
      checked={props.checked}
      onClick={() => addQuest("Text")} />
  );
};
