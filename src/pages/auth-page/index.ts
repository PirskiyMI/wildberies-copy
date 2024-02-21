import { lazy } from 'react';

export const AuthPage = lazy(async () => {
   const { AuthPage } = await import('./ui');
   return { default: AuthPage };
});
