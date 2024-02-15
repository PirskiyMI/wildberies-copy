import { ReactNode } from 'react';

export interface IBasketItemCardProps {
   imageComponent?: ReactNode;
   contentComponent?: ReactNode;
   counterComponent?: ReactNode;
   totalComponent?: ReactNode;
   className?: string;
}
