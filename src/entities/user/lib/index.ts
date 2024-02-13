import { lazy } from 'react';

export const UserPaymentCardContainer = lazy(async () => {
   const { UserPaymentCardContainer } = await import('./containers');
   return { default: UserPaymentCardContainer };
});
