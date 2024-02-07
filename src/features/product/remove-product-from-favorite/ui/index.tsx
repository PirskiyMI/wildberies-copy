import { FC, memo } from 'react';

import { DeleteButtonSmall, IProduct } from 'src/shared';

import styles from './styles.module.scss';
import { useRemove } from '../hooks';

type Props = {
   product: IProduct;
};

export const RemoveProductFromFavorites: FC<Props> = memo(({ product }) => {
   const { removeProductFromFavorites } = useRemove(product);

   return (
      <div>
         <DeleteButtonSmall clickHandler={removeProductFromFavorites} className={styles.button} />
      </div>
   );
});
