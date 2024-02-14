import { FC, useCallback } from 'react';

import { useAppDispatch } from 'src/shared';
import { productFavoritesActions } from 'src/entities/product';

import { IRemoveProductFromFavoriteContainerProps } from './types';
import { RemoveProductFromFavorite } from '../ui';

export const RemoveProductFromFavoriteContainer: FC<IRemoveProductFromFavoriteContainerProps> = ({
   product,
}) => {
   const { toggleProductToFavorites } = productFavoritesActions;
   const dispatch = useAppDispatch();

   const removeProductFromFavorites = useCallback(() => {
      dispatch(toggleProductToFavorites(product));
   }, [product, toggleProductToFavorites, dispatch]);

   return <RemoveProductFromFavorite clickHandler={removeProductFromFavorites} />;
};
