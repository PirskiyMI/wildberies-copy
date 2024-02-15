import { useCallback, FC } from 'react';

import { IProduct, useAppDispatch, useAppSelector } from 'src/shared';
import { productFavoritesActions } from 'src/entities/product';
import { inFavoritesSelector } from 'src/entities/product/model/selectors';

import { ToggleProductToFavorite } from './ui';

export interface IToggleProductToFavoriteContainerProps {
   product: IProduct;
}

export const ToggleProductToFavoriteContainer: FC<IToggleProductToFavoriteContainerProps> = ({
   product,
}) => {
   const isFavorite = useAppSelector((state) => inFavoritesSelector(state, product.id));
   const { toggleProductToFavorites } = productFavoritesActions;
   const dispatch = useAppDispatch();

   const toggleProductToFavorite = useCallback(() => {
      dispatch(toggleProductToFavorites(product));
   }, [product, toggleProductToFavorites, dispatch]);

   return (
      <ToggleProductToFavorite isFavorite={isFavorite} clickHandler={toggleProductToFavorite} />
   );
};
