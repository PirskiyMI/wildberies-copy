import { lazy } from 'react';

export const DesktopOrderInfo = lazy(async () => {
   const { OrderInfoContainer } = await import('./desktop');
   return { default: OrderInfoContainer };
});
export const MobileOrderInfo = lazy(async () => {
   const { OrderInfoContainer } = await import('./mobile');
   return { default: OrderInfoContainer };
});
