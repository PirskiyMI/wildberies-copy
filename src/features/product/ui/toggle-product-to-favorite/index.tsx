import { FC, memo, useCallback } from 'react';

import { FavoriteButton, IProduct, useAppDispatch } from 'src/shared';
import { productFavoritesActions, productsActions } from 'src/entities/product';

import styles from './styles.module.scss';

type Props = {
   product: IProduct;
};

export const ToggleProductToFavorite: FC<Props> = memo(({ product }) => {
   const { addProductToFavorites, removeProductFromFavorites } = productFavoritesActions;
   const { toggleToFavorite } = productsActions;
   const isFavorite = product.isFavorite;
   const classes = isFavorite ? `${styles.button} ${styles.button_active}` : styles.button;
   const dispatch = useAppDispatch();

   const clickHandler = useCallback(() => {
      dispatch(toggleToFavorite(product.id));
      if (!isFavorite) {
         dispatch(addProductToFavorites(product));
      } else {
         dispatch(removeProductFromFavorites(product.id));
      }
   }, [
      product,
      isFavorite,
      addProductToFavorites,
      removeProductFromFavorites,
      toggleToFavorite,
      dispatch,
   ]);

   return <FavoriteButton clickHandler={clickHandler} isFill={isFavorite} className={classes} />;
});
