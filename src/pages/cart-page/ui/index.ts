import { lazy } from 'react';

export const DesktopCartPage = lazy(async () => {
   const { CartPage } = await import('./desktop');
   return { default: CartPage };
});
export const MobileCartPage = lazy(async () => {
   const { CartPage } = await import('./mobile');
   return { default: CartPage };
});
