import { useCallback } from 'react';

import { IProduct, useAppDispatch } from 'src/shared';
import { productFavoritesActions } from 'src/entities/product';

export const useRemove = (product: IProduct) => {
   const { toggleProductToFavorites } = productFavoritesActions;
   const dispatch = useAppDispatch();

   const removeProductFromFavorites = useCallback(() => {
      dispatch(toggleProductToFavorites(product));
   }, [product, toggleProductToFavorites, dispatch]);

   return { removeProductFromFavorites };
};
