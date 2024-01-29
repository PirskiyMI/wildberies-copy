import { FC } from 'react';

import { FavoriteButton, IProductWithRating, useAppDispatch } from 'src/shared';
import { addToFavorites, removeFromFavorites } from 'src/entities/user';
import { toggleToFavorite } from 'src/entities/product';

import styles from './styles.module.scss';

type Props = {
   product: IProductWithRating;
};

export const ToggleProductToFavorite: FC<Props> = ({ product }) => {
   const classes = product.isFavorite ? `${styles.button} ${styles.button_active}` : styles.button;
   const dispatch = useAppDispatch();

   const clickHandler = () => {
      if (!product.isFavorite) {
         dispatch(toggleToFavorite(product.id));
         dispatch(addToFavorites(product));
      } else {
         dispatch(toggleToFavorite(product.id));
         dispatch(removeFromFavorites(product.id));
      }
   };

   return (
      <FavoriteButton clickHandler={clickHandler} isFill={product.isFavorite} className={classes} />
   );
};
