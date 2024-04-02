import { CommandBarButton, IButtonProps } from "@fluentui/react";
import * as React from "react";
import { ICommandBarPropertiesProps } from "./ICommandBarProprertiesProps";
import { addPageIcon, editPen, more, trashCan } from "../IProps/IIconProps";

export class CommandBarProperties extends React.Component<
  IButtonProps & ICommandBarPropertiesProps,
  {}
> {
  public render(): React.ReactNode {
    const { disabled, checked } = this.props;

    const editCurrentItem = (): void => {
      if (this.props.item === "page") {
        this.props.editCurrentItem("page", this.props.pageId);
        this.props.editCurrentPropertyItem(
          this.props.survey.pages[this.props.pageId ?? 0].title,
          this.props.survey.pages[this.props.pageId ?? 0].description
        );
      }
      if (this.props.item === "survey") {
        this.props.editCurrentItem("survey");
        this.props.editCurrentPropertyItem(
          this.props.survey.title,
          this.props.survey.description
        );
      }
      if (this.props.item === "question") {
        this.props.editCurrentItem(
          "question",
          this.props.pageId,
          this.props.questionId
        );
        this.props.editCurrentPropertyItem(
          this.props.survey.pages[this.props.pageId ?? 0].panels[0].questions[
            this.props.questionId ?? 0
          ].title,
          this.props.survey.pages[this.props.pageId ?? 0].panels[0].questions[
            this.props.questionId ?? 0
          ].description,
          this.props.survey.pages[this.props.pageId ?? 0].panels[0].questions[
            this.props.questionId ?? 0
          ].required,
          this.props.itemQuestion,
          this.props.pageId,
          this.props.questionId
        );
      }
    };

    const deleteItem = (): void => {
      if (this.props.item === "page") {
        this.props.deletePage(this.props.pageId);
      }
      if (this.props.item === "question") {
        this.props.deleteQuestion(this.props.questionId, this.props.pageId);
      }
    };

    const addPage = (): void => {
      this.props.addPage(this.props.survey.pages.length);
    };

    if (this.props.item === "page") {
      return (
        <div>
          <CommandBarButton
            disabled={disabled}
            checked={checked}
            iconProps={more}
            menuProps={{
              items: [
                {
                  key: "editProperties",
                  text: "Редактирование",
                  iconProps: editPen,
                  onClick: () => {
                    editCurrentItem();
                  },
                },
                {
                  key: "deleteItem",
                  text: "Удалить страницу",
                  iconProps: trashCan,
                  onClick: () => {
                    deleteItem();
                  },
                },
              ],
            }}
          />
        </div>
      );
    }
    if (this.props.item === "question") {
      return (
        <div>
          <CommandBarButton
            disabled={disabled}
            checked={checked}
            iconProps={more}
            style={{ backgroundColor: "#f5f5f5" }}
            menuProps={{
              items: [
                {
                  key: "editProperties",
                  text: "Редактирование",
                  iconProps: editPen,
                  onClick: () => {
                    editCurrentItem();
                  },
                },
                {
                  key: "deleteItem",
                  text: "Удалить вопрос",
                  iconProps: trashCan,
                  onClick: () => {
                    deleteItem();
                  },
                },
              ],
            }}
          />
        </div>
      );
    }
    if (this.props.item === "survey") {
      return (
        <div>
          <CommandBarButton
            disabled={disabled}
            checked={checked}
            iconProps={more}
            menuProps={{
              items: [
                {
                  key: "editProperties",
                  text: "Редактирование",
                  iconProps: editPen,
                  onClick: () => {
                    editCurrentItem();
                  },
                },
                {
                  key: "deleteItem",
                  text: "Добавить страницу",
                  iconProps: addPageIcon,
                  onClick: () => {
                    addPage();
                  },
                },
              ],
            }}
          />
        </div>
      );
    }
  }
}
