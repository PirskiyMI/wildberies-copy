import { FC, memo } from 'react';

import styles from './styles.module.scss';
import { IBasketTotalCount } from '../lib/types';

export const BasketTotalCount: FC<IBasketTotalCount> = memo(({ count, price, noun }) => {
   return (
      <label className={styles.label}>
         {count} {noun} ● {price} сом
      </label>
   );
});
