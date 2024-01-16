import { FC } from 'react';

import styles from './styles.module.scss';

import { getNoun } from '../../../../shared/lib';

type Props = {
   price: number;
   count: number;
};

export const BasketInfo: FC<Props> = ({ count, price }) => {
   const nounCount = getNoun(count, 'товар', 'товара', 'товаров');

   return (
      <label className={styles.label}>
         {count} {nounCount} ● {price} сом
      </label>
   );
};
