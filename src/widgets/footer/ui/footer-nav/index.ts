import { lazy } from 'react';

export const DesktopFooterNav = lazy(async () => {
   const { FooterNav } = await import('./desktop');
   return { default: FooterNav };
});
export const MobileFooterNav = lazy(async () => {
   const { FooterNav } = await import('./mobile');
   return { default: FooterNav };
});
