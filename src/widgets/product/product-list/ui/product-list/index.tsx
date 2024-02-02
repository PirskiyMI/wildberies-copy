import { FC, memo } from 'react';

import { IProduct } from 'src/shared';

import styles from './styles.module.scss';
import { ProductItem } from '../product-item';

type Props = {
   products: IProduct[];
   isFavoriteList: boolean;
};

export const ProductList: FC<Props> = memo(({ products, isFavoriteList }) => {
   return (
      <ul className={styles.list}>
         {products.map((el) => (
            <li key={el.id} className={styles.list__item}>
               <ProductItem product={el} isFavoriteList={isFavoriteList} />
            </li>
         ))}
      </ul>
   );
});
