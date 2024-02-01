import { FC } from 'react';

import { FavoriteButton, IProduct, useAppDispatch } from 'src/shared';
import { productsActions } from 'src/entities/product';
import { productFavoritesActions } from 'src/entities/product';

import styles from './styles.module.scss';

type Props = {
   product: IProduct;
};

export const ToggleProductToFavorite: FC<Props> = ({ product }) => {
   const { toggleToFavorite } = productsActions;
   const { addProductToFavorites, removeProductToFavorites } = productFavoritesActions;
   const classes = product.isFavorite ? `${styles.button} ${styles.button_active}` : styles.button;
   const dispatch = useAppDispatch();

   const clickHandler = () => {
      dispatch(toggleToFavorite(product.id));
      if (!product.isFavorite) {
         dispatch(addProductToFavorites(product));
      } else {
         dispatch(removeProductToFavorites(product.id));
      }
   };

   return (
      <FavoriteButton clickHandler={clickHandler} isFill={product.isFavorite} className={classes} />
   );
};
