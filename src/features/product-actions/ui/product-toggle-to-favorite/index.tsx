import { FC } from 'react';

import { FavoriteButton, IProductWithRating, useAppDispatch } from 'src/shared';
import { addToFavorites, removeFromFavorites } from 'src/entities/user';
import { toggleToFavorite } from 'src/widgets/home';

import styles from './styles.module.scss'

type Props = {
   product: IProductWithRating;
};

export const ProductToggleToFavorite: FC<Props> = ({ product }) => {
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

   return <FavoriteButton isFavorite={product.isFavorite} clickHandler={clickHandler} className={styles.button}/>;
};
