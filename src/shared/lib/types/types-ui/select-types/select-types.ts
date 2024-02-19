import { Dispatch, SetStateAction } from "react";
import { IOption } from "./select-option-types";

export interface ISelectProps {
    defaultValue: string;
    setSort: Dispatch<SetStateAction<string>>;
    options: IOption[];
    className?: string;
}