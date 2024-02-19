import { lazy } from 'react';

export const DesktopProfileUserDetailsPopUp = lazy(async () => {
   const { ProfileUserDetailsPopUp } = await import('./desktop');
   return { default: ProfileUserDetailsPopUp };
});
export const MobileProfileUserDetailsPopUp = lazy(async () => {
   const { ProfileUserDetailsPopUp } = await import('./mobile');
   return { default: ProfileUserDetailsPopUp };
});
