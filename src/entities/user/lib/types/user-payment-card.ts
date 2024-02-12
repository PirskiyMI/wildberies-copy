import { ReactNode } from 'react';

export interface IUserPaymentCard {
   card: { number: string; img: { src: string; alt: string } };
   deleteButton?: ReactNode;
   switchMainCardButton?: ReactNode;
   isDesktop?: boolean;
   className?: string;
   numberVisible?: boolean;
}
