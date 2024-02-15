import { lazy } from 'react';

export const DesktopSelect = lazy(async () => {
   const { Select } = await import('./desktop');
   return { default: Select };
});
export const MobileSelect = lazy(async () => {
   const { Select } = await import('./mobile');
   return { default: Select };
});
