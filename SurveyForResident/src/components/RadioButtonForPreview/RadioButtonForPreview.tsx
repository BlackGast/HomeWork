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

  // private setAnswer(): void {
  //   // let Answer: string = "Нет ответа";
  //   this.props.easyModel.answer.forEach((element, index) => {
  //     if (element.id === this.props.idStr && element.answer !== "Нет ответа") {
  //       // Answer = element.answer;
  //       this.setState({
  //         defaultChecked: element.answer,
  //       });
  //       console.log(element.answer);

  //     }
  //   })
  // }

  componentDidUpdate(): void {
    console.log(this.state.defaultChecked);
  }

  public render() {
    let answer: number = -1;

    this.props.items.forEach((item, indexItem) => {
      this.props.easyModel.answer.forEach((element, indexElement) => {
        // console.log(this.props.easyModel);
        // console.log(this.props.survey);
        // console.log("item.id: ", item.id);
        // console.log("this.props.idStr: ", this.props.idStr);
        // console.log("element.answer: ", element.answer);
        // console.log(" ");
        
        // if (item.id === this.props.idStr && element.answer !== "Нет ответа") {
        if (item.id === this.props.idStr) {
          console.log(item);
          answer = indexItem;
        }
      });
    });
    // this.props.easyModel.answer.forEach((element, index) => {
    //   if (element.id === this.props.idStr && element.answer !== "Нет ответа") {
    //     answer = index;
    //     // console.log(answer);
    //     console.log(this.props.items);
    //     // this.props.survey.pages[this.props.pageId].panels[0].questions[this.props.questionId].getPropertyByName
    //   }
    // })

    return (
      <ChoiceGroup
        className="defaultChoiceGroup"
        defaultSelectedKey={`${answer}`}
        options={this.props.items.map((elements: any, index: number) => ({
          key: `${index}`,
          text: elements.title,
        }))}
        onChange={(e) => {
          // console.log(this.props.items)
          this.props.setAnswer(
            e?.currentTarget.nextElementSibling?.textContent ?? "",
            this.props.idStr
          );
        }}
      />
    );
  }
}
