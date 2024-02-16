import { lazy } from 'react';

export const DesktopOrderInfo = lazy(async () => {
   const { OrderInfo } = await import('./desktop');
   return { default: OrderInfo };
});
export const MobileOrderInfo = lazy(async () => {
   const { OrderInfo } = await import('./mobile');
   return { default: OrderInfo };
});
