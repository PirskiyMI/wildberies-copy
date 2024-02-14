import { lazy } from 'react';

export const ChangeUserName = lazy(async () => {
   const { ChangeUserNameContainer } = await import('./container');
   return { default: ChangeUserNameContainer };
});
