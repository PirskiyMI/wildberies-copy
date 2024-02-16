import { lazy } from 'react';

export const DesktopDeleteCard = lazy(async () => {
   const { DeleteCard } = await import('./desktop');
   return { default: DeleteCard };
});
export const MobileDeleteCard = lazy(async () => {
   const { DeleteCard } = await import('./desktop');
   return { default: DeleteCard };
});
