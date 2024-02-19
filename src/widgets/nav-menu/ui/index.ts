import { lazy } from 'react';

export const DesktopNavMenu = lazy(async () => {
   const { NavMenuContainer } = await import('./desktop');
   return { default: NavMenuContainer };
});

export const MobileNavMenu = lazy(async () => {
   const { NavMenu } = await import('./mobile');
   return{default: NavMenu}
});
