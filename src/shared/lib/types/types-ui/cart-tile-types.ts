import { ReactNode } from "react";

export interface ICartTileProps {
    title: string;
    content: ReactNode;
    clickHandle?: () => void;
    className?: string;
}