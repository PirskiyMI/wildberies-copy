import { lazy } from 'react';

export const DesktopCartItemCard = lazy(async () => {
   const { DesktopCartItemCard } = await import('./desktop');
   return { default: DesktopCartItemCard };
});

export const MobileCartItemCard = lazy(async () => {
   const { MobileCartItemCard } = await import('./mobile');
   return { default: MobileCartItemCard };
});
