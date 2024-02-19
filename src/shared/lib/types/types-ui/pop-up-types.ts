import { ReactNode } from "react";

export interface IPopUpProps {
    children: ReactNode;
    closePopUp: () => void;
    className?: string;
}