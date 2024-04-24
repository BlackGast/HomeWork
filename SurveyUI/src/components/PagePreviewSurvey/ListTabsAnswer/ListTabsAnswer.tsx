import React from "react";
import { IListTabsAnswerProps } from "./IListTabsAnswerProps";
import { Pivot, PivotItem } from "@fluentui/react";

export class ListTabsAnswer extends React.Component<IListTabsAnswerProps> {
  private renderTable(): React.ReactNode {
    return (
      <div className="answer-table">
        <table style={{ width: "70%" }}>
          <thead>
            <tr
              className="answer-table_element"
              style={{ background: "white" }}
            >
              <th className="answer-table_element_item">Название</th>
              <th className="answer-table_element_item">Ответ</th>
            </tr>
          </thead>
          <tbody>
            {this.props.answerModel.pages.map((element, indexPage) => (
              <React.Fragment key={element.id}>
                {this.props.answerModel.pages[
                  indexPage
                ].panels[0].questions.map((item) => (
                  <tr key={item.id} className="answer-table_element">
                    <td className="answer-table_element_item">{item.title}</td>
                    <td className="answer-table_element_item">{item.answer}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  private renderJson(): React.ReactNode {
    return (
      <pre
        style={{
          textAlign: "start",
          marginLeft: "14px",
          marginRight: "14px",
        }}
      >
        {JSON.stringify(this.props.answerModel, null, 2)}
      </pre>
    );
  }

  render(): React.ReactNode {
    //console.log(this.props.easyAnswerModel);
    
    return (
      <div>
        <Pivot aria-label="Tabs of answer" linkFormat="tabs">
          <PivotItem headerText="Таблица">
            <>{this.renderTable()}</>
          </PivotItem>
          <PivotItem headerText="JSON">
            <>{this.renderJson()}</>
          </PivotItem>
        </Pivot>
      </div>
    );
  }
}
