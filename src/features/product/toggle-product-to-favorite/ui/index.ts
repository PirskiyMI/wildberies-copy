import { lazy } from 'react';

export const ToggleProductToFavorite = lazy(async () => {
   const { ToggleProductToFavoriteContainer } = await import('./container');
   return { default: ToggleProductToFavoriteContainer };
});
