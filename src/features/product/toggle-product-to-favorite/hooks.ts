import { useCallback } from 'react';

import { IProduct, useAppDispatch } from 'src/shared';
import { productFavoritesActions } from 'src/entities/product';

export const useToggle = ({ product }: { product: IProduct }) => {
   const { toggleProductToFavorites } = productFavoritesActions;
   const dispatch = useAppDispatch();

   const toggleProductToFavorite = useCallback(() => {
      dispatch(toggleProductToFavorites(product));
   }, [product, toggleProductToFavorites, dispatch]);

   return { toggleProductToFavorite };
};
