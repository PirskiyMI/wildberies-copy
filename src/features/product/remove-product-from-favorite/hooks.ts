import { useCallback } from 'react';

import { IProduct, useAppDispatch } from 'src/shared';
import { productFavoritesActions, productsActions } from 'src/entities/product';

export const useRemove = (product: IProduct) => {
   const { toggleProductToFavorites } = productFavoritesActions;
   const { toggleToFavorite } = productsActions;
   const dispatch = useAppDispatch();

   const removeProductFromFavorites = useCallback(() => {
      dispatch(toggleToFavorite(product.id));
      dispatch(toggleProductToFavorites(product));
   }, [product, toggleToFavorite, toggleProductToFavorites, dispatch]);

   return { removeProductFromFavorites };
};
