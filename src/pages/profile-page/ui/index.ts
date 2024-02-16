import { lazy } from 'react';

export const DesktopProfilePage = lazy(async () => {
   const { ProfilePage } = await import('./desktop');
   return { default: ProfilePage };
});
export const MobileProfilePage = lazy(async () => {
   const { ProfilePage } = await import('./mobile');
   return { default: ProfilePage };
});
