import * as React from "react";
import { IPageEditorJsonProps } from "./IPageEditorJsonProps";
import { DefaultButton, TextField } from "@fluentui/react";
import { IPageEditorJsonState } from "./IPageEditorJsonState";

export class PageEditorJson extends React.Component<IPageEditorJsonProps, IPageEditorJsonState> {
  constructor (props: IPageEditorJsonProps) {
    super(props)
    this.state={
      surveyStr: ''
    }
  }

  componentDidMount(): void {
    this.setState({surveyStr: JSON.stringify(this.props.survey, null, "\t")})
  }

  public render(): React.ReactNode {
    if (this.props.survey.pages.length === 0) {
      return (
        <div className="preview-container">
          <div className="preview-container_title-survey">
            <p>Опрос пустой</p>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div>
            <TextField
              value={this.state.surveyStr}
              multiline
              resizable={false}
              rows={40}
              onChange={(e) => {
                this.setState({surveyStr: e.currentTarget.value});
                // surveyStr = e.currentTarget.value;
              }}
            />
          </div>
          <DefaultButton
            style={{marginTop: "10px"}}
            text="Сохранить"
            onClick={() => {
              try {
                //console.log(JSON.parse(e.currentTarget.value));
                this.props.parseStrToSurvey(this.state.surveyStr);
              } catch (error) {
                alert("Ошибка при изменении JSON");
                // console.log("Ошибка");
              }
            }}
          />
        </>
      );
    }
  }
}
