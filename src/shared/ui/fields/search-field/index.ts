import { lazy } from 'react';

export const DesktopSearchField = lazy(async () => {
   const { SearchField } = await import('./desktop');
   return { default: SearchField };
});
export const MobileSearchField = lazy(async () => {
   const { SearchField } = await import('./mobile');
   return { default: SearchField };
});
