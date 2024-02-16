import { lazy } from 'react';

export const DesktopProfileUserDetails = lazy(async () => {
   const { ProfileUserDetails } = await import('./desktop');
   return { default: ProfileUserDetails };
});
export const MobileProfileUserDetails = lazy(async () => {
   const { ProfileUserDetails } = await import('./mobile');
   return { default: ProfileUserDetails };
});
