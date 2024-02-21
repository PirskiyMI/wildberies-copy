import { lazy } from 'react';

export const DesktopDeleteCard = lazy(async () => {
   const { DeleteCardContainer } = await import('./desktop');
   return { default: DeleteCardContainer };
});
export const MobileDeleteCard = lazy(async () => {
   const { DeleteCardContainer } = await import('./mobile');
   return { default: DeleteCardContainer };
});
