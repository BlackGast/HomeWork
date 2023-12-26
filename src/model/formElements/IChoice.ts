import { IBaseElement } from "./IBaseElement";

export interface IChoice extends IBaseElement {
    id: number;
    label: string;
    checked: boolean;
    disabled: boolean;
}