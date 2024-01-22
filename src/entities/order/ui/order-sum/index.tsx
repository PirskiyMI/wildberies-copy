import { FC } from 'react';

import { Price } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   price: number;
};

export const OrderSum: FC<Props> = ({ price }) => {
   return (
      <div className={styles.sum}>
         <span>Итого</span>
         <Price price={price} />
      </div>
   );
};
