import { lazy } from 'react';

export const DesktopCartTile = lazy(async () => {
   const { CartTile } = await import('./desktop');
   return { default: CartTile };
});
export const MobileCartTile = lazy(async () => {
   const { CartTile } = await import('./mobile');
   return { default: CartTile };
});
