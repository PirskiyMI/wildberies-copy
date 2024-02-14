import { lazy } from 'react';

export const RemoveProductFromFavorite = lazy(async () => {
   const { RemoveProductFromFavoriteContainer } = await import('./container');
   return { default: RemoveProductFromFavoriteContainer };
});
