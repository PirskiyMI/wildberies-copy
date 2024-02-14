import { lazy } from 'react';

export const DesktopBasketItem = lazy(async () => {
   const { DesktopBasketItem } = await import('./desktop-item');
   return { default: DesktopBasketItem };
});

export const MobileBasketItem = lazy(async () => {
   const { MobileBasketItem } = await import('./modile-item');
   return { default: MobileBasketItem };
});
