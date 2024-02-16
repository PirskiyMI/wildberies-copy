import { ReactNode } from 'react';

export interface IUserPaymentCard {
   cardNumber: string;
   deleteButton?: ReactNode;
   switchMainCardButton?: ReactNode;
   className?: string;
   numberVisible?: boolean;
}
