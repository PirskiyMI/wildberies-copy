import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ISearchFieldProps {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    ClearButton: ReactNode;
    SearchButton: ReactNode;
}