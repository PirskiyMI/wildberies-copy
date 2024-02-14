import { FC, memo } from 'react';

import styles from './styles.module.scss';
import { ProductItem } from '../product-item';
import { IProductListProps } from '../../lib/types';

export const ProductList: FC<IProductListProps> = memo(({ products, isFavoriteList }) => {
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
