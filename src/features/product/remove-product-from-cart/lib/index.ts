import { lazy } from 'react';

export const RemoveProductFromCart = lazy(async () => {
   const { RemoveProductFromCardContainer } = await import('./container');
   return { default: RemoveProductFromCardContainer };
});
