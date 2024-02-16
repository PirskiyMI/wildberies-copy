import { lazy } from 'react';

export const DesktopUserInfo = lazy(async () => {
   const { UserInfo } = await import('./desktop');
   return { default: UserInfo };
});
export const MobileUserInfo = lazy(async () => {
   const { UserInfo } = await import('./mobile');
   return { default: UserInfo };
});
