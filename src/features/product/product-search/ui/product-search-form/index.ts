import { lazy } from 'react';

export const DesktopProductSearch = lazy(async () => {
   const { ProductSearch } = await import('./desktop');
   return { default: ProductSearch };
});
export const MobileProductSearch = lazy(async () => {
   const { ProductSearch } = await import('./mobile');
   return { default: ProductSearch };
});
