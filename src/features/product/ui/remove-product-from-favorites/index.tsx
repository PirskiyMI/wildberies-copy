import { FC } from 'react';

import { DeleteButtonSmall, useAppDispatch } from 'src/shared';
import { productFavoritesActions, productsActions } from 'src/entities/product';

import styles from './styles.module.scss';

type Props = {
   productId: number;
};

export const RemoveProductFromFavorites: FC<Props> = ({ productId }) => {
   const { toggleToFavorite } = productsActions;
   const { removeProductToFavorites } = productFavoritesActions;
   const dispatch = useAppDispatch();

   const clickHandler = () => {
      dispatch(toggleToFavorite(productId));
      dispatch(removeProductToFavorites(productId));
   };

   return (
      <div>
         <DeleteButtonSmall clickHandler={clickHandler} className={styles.button} />
      </div>
   );
};
