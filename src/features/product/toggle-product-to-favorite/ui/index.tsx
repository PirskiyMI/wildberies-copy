import { FC, memo } from 'react';

import { FavoriteButton, IProduct, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';
import { useToggle } from '../hooks';
import { inFavoritesSelector } from 'src/entities/product/model/selectors';

type Props = {
   product: IProduct;
};

export const ToggleProductToFavorite: FC<Props> = memo(({ product }) => {
   const isFavorite = useAppSelector((state) => inFavoritesSelector(state, product.id));
   const classes = isFavorite ? `${styles.button} ${styles.button_active}` : styles.button;
   const { toggleProductToFavorite } = useToggle({ product });

   return (
      <FavoriteButton
         clickHandler={toggleProductToFavorite}
         isFill={isFavorite}
         className={classes}
      />
   );
});
