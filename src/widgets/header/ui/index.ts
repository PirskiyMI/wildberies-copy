import { lazy } from 'react';

export const DesktopHeader = lazy(async () => {
   const { HeaderContainer } = await import('./desktop-header');
   return { default: HeaderContainer };
});
export const MobileHeader = lazy(async () => {
   const { Header } = await import('./mobile-header');
   return { default: Header };
});
