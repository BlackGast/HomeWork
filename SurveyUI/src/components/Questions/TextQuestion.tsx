import React from "react";
import {
  IStackStyles,
  TextField,
  Label,
  Checkbox,
  DefaultButton,
} from "@fluentui/react";
import { Page, trashCan } from "../../App";

export class TextQuestion extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      key: 0
    }    
  }

  private delete(index: number) {
    Page.handleDeleteQuestion(index);
  }

  //private index = this.props
  
  public render(): React.ReactNode {
    const styleCheckbox: Partial<IStackStyles> = {
      root: {
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center",
      },
    };
    
    //console.log(this.props.id);
    
    return (
      <div 
        className="container_page_question"
        onClick={(event) => {
          console.log(event.target);
        }}
      >
        <TextField
          borderless
          placeholder="Название вопроса"
          style={{
            backgroundColor: "#f5f5f5",
            fontSize: 15,
          }}
        />
        {/* <Label>Вопрос</Label> */}
        {/* <div style={{
          paddingLeft: "5%",
          paddingRight: "5%",
          paddingBottom: 10,
          }}>
          <TextField 
            style={{width: "100%"}}
            disabled
          />
        </div> */}
        <div className="question_settings">
          <Checkbox label="Обязательный" styles={styleCheckbox} />
          <DefaultButton
            text="Удалить"
            iconProps={trashCan}
            // id={this.props.id}
            onClick={() => {
              this.delete(this.props.id);
              //console.log(event.target);
            }}
          />
        </div>
      </div>
    );
  }
}
