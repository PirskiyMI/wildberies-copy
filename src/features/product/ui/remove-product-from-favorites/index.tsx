import { FC } from 'react';

import { DeleteButtonSmall, useAppDispatch } from 'src/shared';
import { removeFromFavorites } from 'src/entities/user';
import { toggleToFavorite } from 'src/entities/product';

import styles from './styles.module.scss';

type Props = {
   productId: number;
};

export const RemoveProductFromFavorites: FC<Props> = ({ productId }) => {
   const dispatch = useAppDispatch();

   const clickHandler = () => {
      dispatch(toggleToFavorite(productId));
      dispatch(removeFromFavorites(productId));
   };

   return (
      <div>
         <DeleteButtonSmall clickHandler={clickHandler} className={styles.button} />
      </div>
   );
};
