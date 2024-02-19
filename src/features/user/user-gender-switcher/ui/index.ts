import { lazy } from 'react';

export const DesktopUserGenderSwitcher = lazy(async () => {
   const { UserGenderSwitcherContainer } = await import('./desktop');
   return { default: UserGenderSwitcherContainer };
});
export const MobileUserGenderSwitcher = lazy(async () => {
   const { UserGenderSwitcherContainer } = await import('./mobile');
   return { default: UserGenderSwitcherContainer };
});
