import { lazy } from 'react';

export const DesktopProfilePaymentMethod = lazy(async () => {
   const { ProfilePaymentMethod } = await import('./desktop');
   return { default: ProfilePaymentMethod };
});
export const MobileProfilePaymentMethod = lazy(async () => {
   const { ProfilePaymentMethod } = await import('./mobile');
   return { default: ProfilePaymentMethod };
});
