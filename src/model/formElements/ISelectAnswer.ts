import { IBaseElement } from "./IBaseElement";

export interface ISelectAnswer extends IBaseElement {
    id: number;
    label: string;
    checked: boolean;
    disabled: boolean;
}