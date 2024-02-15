import { ReactNode } from 'react';

export interface IUserPaymentCard {
   cardNumber: string;
   deleteButton?: ReactNode;
   switchMainCardButton?: ReactNode;
   isDesktop?: boolean;
   className?: string;
   numberVisible?: boolean;
}
