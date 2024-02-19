import { lazy } from 'react';

export const DesktopCartUserDetails = lazy(async () => {
   const { CardUserDetailsContainer } = await import('./desktop');
   return { default: CardUserDetailsContainer };
});

export const MobileCartUserDetails = lazy(async () => {
   const { CardUserDetailsContainer } = await import('./mobile');
   return { default: CardUserDetailsContainer };
});
