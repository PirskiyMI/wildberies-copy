import { ReactElement, ReactNode } from "react";

export interface ICardProps {
    children?: ReactNode;
    className?: string;
    imageComponent?: ReactNode;
    contentComponent?: ReactNode;
    counterComponent?: ReactNode;
    totalComponent?: ReactNode;
    top?: ReactNode;
    middle?: ReactElement;
    bottom?: ReactNode;
}