import { lazy } from 'react';

export const DesktopBurger = lazy(async () => {
   const { Burger } = await import('./desktop');
   return { default: Burger };
});
export const MobileBurger = lazy(async () => {
   const { Burger } = await import('./mobile');
   return { default: Burger };
});
