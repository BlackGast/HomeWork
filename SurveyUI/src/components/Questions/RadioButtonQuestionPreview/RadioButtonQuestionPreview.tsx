import React from "react";
import "../Question.scss";
import { IRadioButtonQuestionPreviewProps } from "./IRadioButtonQuestionPreviewProps";
import { RadioButtonForPreview } from "../../RadioButtonForPreview/RadioButtonForPreview"

export class RadioButtonQuestionPreview extends React.Component<IRadioButtonQuestionPreviewProps> {
  private requiredSymbol(): React.ReactNode {
    if (
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].required === false
    ) {
      return <></>;
    }
    if (
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].required === true
    ) {
      return <> *</>;
    }
  }

  public render(): React.ReactNode {
    return (
      <div className="container_page_question">
        <div className="question-label">
          <div className="question-label_title">
            {this.props.id + 1}.
            <label
              id="questionName"
              style={{
                backgroundColor: "#f5f5f5",
                fontSize: 14,
              }}
            >
              {
                this.props.survey.pages[this.props.pageId].panels[0].questions[
                  this.props.id
                ].title
              }{" "}
              {this.requiredSymbol()}
            </label>
          </div>
          <div className="question-label_type">Тип: Radio button question</div>
        </div>
        {/* {this.outputSelects()} */}
        <RadioButtonForPreview survey={this.props.survey} items={this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].getValue()}/>
        
      </div>
    );
  }
}
