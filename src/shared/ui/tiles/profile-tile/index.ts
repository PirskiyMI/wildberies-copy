import { lazy } from 'react';

export const DesktopProfileTile = lazy(async () => {
   const { ProfileTile } = await import('./desktop');
   return { default: ProfileTile };
});
export const MobileProfileTile = lazy(async () => {
   const { ProfileTile } = await import('./mobile');
   return { default: ProfileTile };
});
