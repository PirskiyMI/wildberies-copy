import { ReactNode } from "react";

export interface IProfileTileProps {
    path: string;
    title: ReactNode;
    label?: ReactNode;
    content?: ReactNode;
    className?: string;
}