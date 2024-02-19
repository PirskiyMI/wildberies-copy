import { lazy } from 'react';

export const DesktopCartPage = lazy(async () => {
   const { CartPageContainer } = await import('./desktop');
   return { default: CartPageContainer };
});
export const MobileCartPage = lazy(async () => {
   const { CartPage } = await import('./mobile');
   return { default: CartPage };
});
