import { lazy } from 'react';

export const DesktopBasketPaymentMethod = lazy(async () => {
   const { BasketPaymentMethodContainer } = await import('./desktop');
   return { default: BasketPaymentMethodContainer };
});
export const MobileBasketPaymentMethod = lazy(async () => {
   const { BasketPaymentMethodContainer } = await import('./mobile');
   return { default: BasketPaymentMethodContainer };
});
