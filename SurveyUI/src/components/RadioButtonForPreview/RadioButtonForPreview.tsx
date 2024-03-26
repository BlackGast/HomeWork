import { ChoiceGroup } from "@fluentui/react";
import React from "react";
import { IRadioButtonForPreviewProps } from "./IRadioButtonForPreviewProps";

export class RadioButtonForPreview extends React.Component<IRadioButtonForPreviewProps> {
  public render() {
    return (
      <div>
        <ChoiceGroup
          className="defaultChoiceGroup"
          options={this.props.items.map((elements: any, index: number) => ({
            key: `${index}`,
            text: elements.title,
          }))}
          //   options={[
          //     {
          //       key: "A",
          //       text: "Option A",
          //     },
          //     {
          //       key: "B",
          //       text: "Option B",
          //     },
          //     {
          //       key: "C",
          //       text: "Option C",
          //     },
          //     {
          //       key: "D",
          //       text: "Option D",
          //     },
          //   ]}
          onChange={() => {
            console.log("click");
          }}
        />
      </div>
    );
  }
}
