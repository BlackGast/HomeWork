import * as React from "react";
import { IPageEditorJsonProps } from "./IPageEditorJsonProps";
import { TextField } from "@fluentui/react";

export class PageEditorJson extends React.Component<IPageEditorJsonProps> {
  public render(): React.ReactNode {
    return (
      <div>
        <TextField
          value={JSON.stringify(this.props.survey, null, "\t")}
          multiline
          resizable={false}
          rows={40}
          // onChange={(e)=>{console.log(JSON.parse(e.currentTarget.value));
          // }}
        />
      </div>
    );
  }
}
