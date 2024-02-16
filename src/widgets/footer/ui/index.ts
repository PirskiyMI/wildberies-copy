import { lazy } from 'react';

export const DesktopFooter = lazy(async () => {
   const { FooterContainer } = await import('./desktop');
   return { default: FooterContainer };
});
export const MobileFooter = lazy(async () => {
   const { FooterContainer } = await import('./mobile');
   return { default: FooterContainer };
});
