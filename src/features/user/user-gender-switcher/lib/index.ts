import { lazy } from 'react';

export const UserGenderSwitcher = lazy(async () => {
   const { UserGenderSwitcherContainer } = await import('./container');
   return { default: UserGenderSwitcherContainer };
});
