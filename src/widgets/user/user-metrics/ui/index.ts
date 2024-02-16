import { lazy } from 'react';

export const DesktopUserMetrics = lazy(async () => {
   const { UserMetrics } = await import('./desktop');
   return { default: UserMetrics };
});
export const MobileUserMetrics = lazy(async () => {
   const { UserMetrics } = await import('./mobile');
   return { default: UserMetrics };
});
