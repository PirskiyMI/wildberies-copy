import { FC } from 'react';

import { DeleteButtonSmall, IProductWithRating, useAppDispatch } from 'src/shared';
import { removeFromFavorites } from 'src/entities/user';
import { toggleToFavorite } from 'src/widgets/home';

import styles from './styles.module.scss';

type Props = {
   product: IProductWithRating;
};

export const RemoveProductFromFavorites: FC<Props> = ({ product }) => {
   const dispatch = useAppDispatch();

   const clickHandler = () => {
      dispatch(toggleToFavorite(product.id));
      dispatch(removeFromFavorites(product.id));
   };

   return (
      <div>
         <DeleteButtonSmall clickHandler={clickHandler} className={styles.button} />
      </div>
   );
};
