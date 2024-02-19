import { HTMLAttributes, ReactNode } from 'react';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
   children?: ReactNode;
   disabled?: boolean;
   className?: string;
   clickHandler?: () => void;
   isFill?: boolean;
}
