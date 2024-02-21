import { useCallback, FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IProduct, useAppDispatch, useAppSelector } from 'src/shared';
import { productFavoritesActions } from 'src/entities/product';
import { inFavoritesSelector } from 'src/entities/product/model/selectors';

import { ToggleProductToFavorite } from './ui';
import { userIsAuthSelector } from 'src/entities/user';

export interface IToggleProductToFavoriteContainerProps {
   product: IProduct;
}

export const ToggleProductToFavoriteContainer: FC<IToggleProductToFavoriteContainerProps> = ({
   product,
}) => {
   const isAuth = useAppSelector(userIsAuthSelector);
   const navigate = useNavigate();
   const isFavorite = useAppSelector((state) => inFavoritesSelector(state, product.id));
   const { toggleProductToFavorites } = productFavoritesActions;
   const dispatch = useAppDispatch();

   const toggleProductToFavorite = useCallback(() => {
      if (!isAuth) return navigate('/auth');
      dispatch(toggleProductToFavorites(product));
   }, [navigate, isAuth, product, toggleProductToFavorites, dispatch]);

   return (
      <ToggleProductToFavorite isFavorite={isFavorite} clickHandler={toggleProductToFavorite} />
   );
};
