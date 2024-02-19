import { HTMLAttributes } from "react";

export interface IFieldProps extends HTMLAttributes<HTMLInputElement> {
    value: string | number;
    title: string;
    errorText: string;
}