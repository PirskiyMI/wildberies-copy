import { lazy } from 'react';

export const DesktopChangeUserName = lazy(async () => {
   const { ChangeUserNameContainer } = await import('./desktop');
   return { default: ChangeUserNameContainer };
});
export const MobileChangeUserName = lazy(async () => {
   const { ChangeUserNameContainer } = await import('./mobile');
   return { default: ChangeUserNameContainer };
});
