import {
  Checkbox,
  DefaultButton,
  IStackStyles,
  IconButton,
  Label,
} from "@fluentui/react";
import React from "react";
import { circlePlus, trashCan } from "../IProps/IIconProps";

interface CheckboxListProps {
  items: {
    key: number;
    element: React.ReactNode;
  }[];
}

interface CheckboxListState {}

interface CheckBoxQuestionState {
  CheckboxList: {
    key: number;
    element: React.ReactNode;
  }[];
}

export class CheckboxQuestion extends React.Component<
  {},
  CheckBoxQuestionState
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      checkboxList: [],
    };
  }

  componentDidUpdate(): void {
    console.log("componentDidUpdate");
    console.log(this.state);
    this.render();
  }

  addCheckbox = () => {
    const { checkboxList } = this.state;
    this.setState({
      checkboxList: [
        ...checkboxList,
        <Checkbox key={checkboxList.length} label="Ответ" />,
      ],
    });
  };

  public render(): React.ReactNode {
    const styleCheckbox: Partial<IStackStyles> = {
      root: {
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center",
      },
    };
    return (
      <div className="container_page_question">
        <Label>Вопрос</Label>
        <Checkbox label="ответ" />
        <CheckboxList />
        <IconButton iconProps={circlePlus} onClick={this.addCheckbox} />
        <div className="question_settings">
          <Checkbox label="Обязательный" styles={styleCheckbox} />
          <DefaultButton text="Удалить" iconProps={trashCan} />
        </div>
      </div>
    );
  }
}

export class CheckboxList extends React.Component<
  CheckboxListProps,
  CheckboxListState
> {
  public render(): React.ReactNode {
    const { items } = this.props;
    const styleCheckboxes: Partial<IStackStyles> = {
      root: {
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center",
      },
    };
    return (
      <div>
        {items.map((item) => (
          <div key={item.key}>{item.element}</div>
        ))}
      </div>
    );
  }
}
