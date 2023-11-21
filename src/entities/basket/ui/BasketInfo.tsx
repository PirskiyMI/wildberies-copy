import { FC } from 'react';
import styles from './BasketInfo.module.scss';
import { getNoun, useAppSelector } from '../../../shared/lib';

export const BasketInfo: FC = () => {
   const { count, price } = useAppSelector((state) => state.basketInfoReducer);
   const nounCount = getNoun(count, 'товар', 'товара', 'товаров');

   return (
      <label className={styles.label}>
         {count} {nounCount} ● {price} сом
      </label>
   );
};
