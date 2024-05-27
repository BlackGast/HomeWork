import { ChoiceGroup } from "@fluentui/react";
import React from "react";
import { IRadioButtonForPreviewProps } from "./IRadioButtonForPreviewProps";
import "./ChoiceGroup.scss";
import { IRadioButtonForPreviewState } from "./IRadioButtonForPreviewState";

export class RadioButtonForPreview extends React.Component<IRadioButtonForPreviewProps, IRadioButtonForPreviewState> {
  constructor(props: IRadioButtonForPreviewProps) {
    super(props);
    this.state = {
      defaultChecked: false,
    };
  }

  private setAnswer(): boolean {
    let Answer: boolean = false;
    // let Answer: string = "Нет ответа";
    this.props.easyModel.answer.forEach((element, index) => {
      if (element.id === this.props.idStr && element.answer !== "Нет ответа") {
        // Answer = element.answer;
        this.setState({
          defaultChecked: true,
        })
        Answer = true;
      }
    })
    return (Answer);
  }

  componentDidMount(): void {
    console.log(this.setAnswer());
  }

  public render() {
    // console.log(this.props.items);
    // console.log(this.props.easyModel);
    // console.log(this.props.idStr);

    return (
      <div>
        <ChoiceGroup
          className="defaultChoiceGroup"
          defaultChecked={this.state.defaultChecked}
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
      </div>
    );
  }
}
