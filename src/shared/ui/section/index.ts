import { lazy } from 'react';

export const DesktopSection = lazy(async () => {
   const { Section } = await import('./desktop');
   return { default: Section };
});
export const MobileSection = lazy(async () => {
   const { Section } = await import('./mobile');
   return { default: Section };
});
