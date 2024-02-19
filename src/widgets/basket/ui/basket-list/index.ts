import { lazy } from 'react';

export const DesktopBasketList = lazy(async () => {
   const { BasketList } = await import('./desktop');
   return { default: BasketList };
});

export const MobileBasketList = lazy(async () => {
   const { BasketList } = await import('./mobile');
   return { default: BasketList };
});
