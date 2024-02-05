import { FC, memo } from 'react';

import { FavoriteButton, IProduct } from 'src/shared';

import styles from './styles.module.scss';
import { useToggle } from '../hooks';

type Props = {
   product: IProduct;
};

export const ToggleProductToFavorite: FC<Props> = memo(({ product }) => {
   const isFavorite = product.isFavorite;
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
