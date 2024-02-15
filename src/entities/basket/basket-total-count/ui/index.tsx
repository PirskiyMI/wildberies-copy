import { FC, memo } from 'react';

import styles from './styles.module.scss';
import { IBasketTotalCount } from '../types';
import { getNoun } from 'src/shared';

export const BasketTotalCount: FC<IBasketTotalCount> = memo(({ count, price }) => {
   const noun = getNoun(count, 'товар', 'товара', 'товаров');

   return (
      <label className={styles.label}>
         {count} {noun} ● {price} сом
      </label>
   );
});
