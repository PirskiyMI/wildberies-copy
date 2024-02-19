import { Dispatch, SetStateAction } from "react";
import { IOption } from "./select-option-types";

export interface ISelectListProps {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    setSort: Dispatch<SetStateAction<string>>;
    options: IOption[];
}