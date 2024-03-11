import * as React from "react";
import { Stack, TextField } from "@fluentui/react";
import { SurveyPage } from "../SurveyPage/SurveyPage";
import { columnProps } from "./columnProps";
import { IPageDesignerSurveyProps } from "./IPageDesignerSurveyProps";

export class PageDesignerSurvey extends React.Component<IPageDesignerSurveyProps> {
  public render(): React.ReactNode {
    return (
      <div className="page bodyPage_colored">
        {/* <div className="page_part page_part-part1">
                  <div className="menu">
                    <QuestionButtonCommandBar survey={this.props.survey} />
                  </div>
                </div>
                <div className="vertical-line" /> */}
        <div className="page_part page_part-part2">
          <SurveyPage
            survey={this.props.survey}
            questions={this.props.questions}
            addQuestion={this.props.addQuestion}
            deleteQuestion={this.props.deleteQuestion}
            deletePage={this.props.deletePage}
            addPage={this.props.addPage}
          />
        </div>
        <div className="vertical-line" />
        <div className="page_part page_part-part3">
          <p className="settings-lbl">Настройки</p>
          <hr />
          <Stack {...columnProps}>
            <TextField label="Название" />
            <TextField label="Описание" multiline rows={2} />
          </Stack>
        </div>
      </div>
    );
  }
}
