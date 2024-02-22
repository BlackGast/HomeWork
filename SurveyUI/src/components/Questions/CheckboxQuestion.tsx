import {
  Checkbox,
  DefaultButton,
  IStackStyles,
  IconButton,
  Label,
} from "@fluentui/react";
import React from "react";
import { circlePlus, trashCan } from "../IProps/IIconProps";

interface ICheckboxQuestionProps {
  id: number;
}

interface CheckboxListProps {
  id: number;
}

interface CheckboxListState {}

interface CheckBoxQuestionState {
  checkboxList: {
    id: number;
  }[];
}

export class CheckboxQuestion extends React.Component<
  ICheckboxQuestionProps,
  CheckBoxQuestionState
> {
  constructor(props: ICheckboxQuestionProps) {
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
    const { checkboxList } = this.state.checkboxList;
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
        <CheckboxList id={this.props.id} />
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
    const { items } = this.props.id;
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
