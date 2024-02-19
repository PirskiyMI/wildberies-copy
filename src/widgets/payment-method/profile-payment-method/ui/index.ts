import { lazy } from 'react';

export const DesktopProfilePaymentMethod = lazy(async () => {
   const { ProfilePaymentMethodContainer } = await import('./desktop');
   return { default: ProfilePaymentMethodContainer };
});
export const MobileProfilePaymentMethod = lazy(async () => {
   const { ProfilePaymentMethodContainer } = await import('./mobile');
   return { default: ProfilePaymentMethodContainer };
});
