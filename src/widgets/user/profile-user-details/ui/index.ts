import { lazy } from 'react';

export const DesktopProfileUserDetails = lazy(async () => {
   const { ProfileUserDetailsContainer } = await import('./desktop');
   return { default: ProfileUserDetailsContainer };
});
export const MobileProfileUserDetails = lazy(async () => {
   const { ProfileUserDetailsContainer } = await import('./mobile');
   return { default: ProfileUserDetailsContainer };
});
