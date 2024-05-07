import { Dropdown, IDropdownOption, IDropdownStyles } from "@fluentui/react";
import React from "react";
import { IDropdownForQSubtypeProps } from "./IDropdownForQSubtypeProps";
import { IDropdownForQSubtypeState } from "./IDropdownForQSubtypeState";

export class DropdownForQSubtype extends React.Component<
  IDropdownForQSubtypeProps,
  IDropdownForQSubtypeState
> {
  constructor(props: IDropdownForQSubtypeProps) {
    super(props);
    this.state = {
      subType: this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.questionId
      ]
        .getPropertyByName("subType")
        .toLowerCase(),
    };
  }

  componentDidMount(): void {
      // console.log(this.state.subType);
      
  }

  private dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: {
      width: 300,
      marginLeft: "auto",
      marginRight: "auto",
    },
  };

  private options: IDropdownOption[] = [
    {
      key: "text",
      text: "Text",
    },
    {
      key: "number",
      text: "Number",
    },
    {
      key: "email",
      text: "Email",
    },
    {
      key: "phonenumber",
      text: "PhoneNumber",
    },
  ];

  render(): React.ReactNode {
    return (
      <Dropdown
        placeholder="Select an option"
        label="Подтип вопроса"
        defaultSelectedKey={this.state.subType}
        options={this.options}
        styles={this.dropdownStyles}
        onChange={(e) => {
          this.setState({
            subType: e.currentTarget.childNodes[0].textContent?.toLowerCase() ?? ""
          })
          this.props.setSubType(
            this.props.pageId,
            this.props.questionId,
            e.currentTarget.childNodes[0].textContent || undefined
          );
        }}
      />
    );
  }
}
