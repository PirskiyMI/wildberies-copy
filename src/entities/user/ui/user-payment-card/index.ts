import { lazy } from 'react';

export const DesktopUserPaymentCard = lazy(async () => {
   const { UserPaymentCard } = await import('./desktop');
   return { default: UserPaymentCard };
});
export const MobileUserPaymentCard = lazy(async () => {
   const { UserPaymentCard } = await import('./mobile');
   return { default: UserPaymentCard };
});
