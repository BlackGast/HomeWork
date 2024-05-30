import { ChoiceGroup } from "@fluentui/react";
import React from "react";
import { IRadioButtonForPreviewProps } from "./IRadioButtonForPreviewProps";
import "./ChoiceGroup.scss";
import { IRadioButtonForPreviewState } from "./IRadioButtonForPreviewState";

export class RadioButtonForPreview extends React.Component<IRadioButtonForPreviewProps, IRadioButtonForPreviewState> {
  constructor(props: IRadioButtonForPreviewProps) {
    super(props);
    this.state = {
      defaultChecked: '',
    };
  }
  
  private answer: number = -1;

  componentDidMount(): void {
    this.answer = -1;
  }

  public render() {
    this.props.items.forEach((item, indexItem) => {
      this.props.easyModel.answer.forEach((element) => {
        if (this.props.idStr === element.id && element.answer !== "Нет ответа") {
          if (item.title === element.answer) {
            this.answer = indexItem;
          }
        }
      });
    });

    return (
      <ChoiceGroup
        className="defaultChoiceGroup"
        defaultSelectedKey={`${this.answer}`}
        options={this.props.items.map((elements: any, index: number) => ({
          key: `${index}`,
          text: elements.title,
        }))}
        onChange={(e) => {
          this.props.setAnswer(
            e?.currentTarget.nextElementSibling?.textContent ?? "",
            this.props.idStr
          );
        }}
      />
    );
  }
}
